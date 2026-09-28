-- Zeitreise-Einkaufswagen – PostgreSQL Zielschema
-- GitHub ist aktuell die Entwicklungs-/Backup-Schicht.
-- Dieses Schema ist für die spätere produktive Datenbank vorbereitet.

CREATE TABLE retailers (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL UNIQUE
);

CREATE TABLE products (
  id BIGINT PRIMARY KEY,
  name TEXT NOT NULL,
  brand TEXT,
  size TEXT,
  category TEXT NOT NULL,
  source_url TEXT
);

CREATE TABLE sources (
  id TEXT PRIMARY KEY,
  source_type TEXT NOT NULL,
  name TEXT NOT NULL,
  url TEXT
);

CREATE TABLE price_observations (
  id TEXT PRIMARY KEY,
  product_id BIGINT NOT NULL REFERENCES products(id),
  retailer_id TEXT NOT NULL REFERENCES retailers(id),
  retailer_raw TEXT,
  observed_at DATE NOT NULL,
  price_cents INTEGER NOT NULL CHECK (price_cents >= 0),
  currency CHAR(3) NOT NULL DEFAULT 'EUR',
  unit TEXT,
  source_id TEXT REFERENCES sources(id),
  status TEXT NOT NULL DEFAULT 'pending',
  confidence NUMERIC(5,4),
  submitted_by TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_price_observations_product_year
  ON price_observations(product_id, observed_at);

CREATE INDEX idx_price_observations_retailer_date
  ON price_observations(retailer_id, observed_at);

CREATE TABLE price_submissions (
  id BIGSERIAL PRIMARY KEY,
  product_id BIGINT NOT NULL REFERENCES products(id),
  retailer_id TEXT REFERENCES retailers(id),
  observed_at DATE NOT NULL,
  submitted_price_cents INTEGER NOT NULL CHECK (submitted_price_cents >= 0),
  source_type TEXT NOT NULL,
  source_reference TEXT,
  receipt_image_hash TEXT,
  submitted_by TEXT,
  submitted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  validation_status TEXT NOT NULL DEFAULT 'pending',
  validation_score NUMERIC(5,4)
);

CREATE INDEX idx_submissions_match
  ON price_submissions(product_id, retailer_id, observed_at);

CREATE TABLE validation_clusters (
  id BIGSERIAL PRIMARY KEY,
  product_id BIGINT NOT NULL REFERENCES products(id),
  retailer_id TEXT REFERENCES retailers(id),
  observed_year INTEGER NOT NULL,
  representative_price_cents INTEGER NOT NULL,
  tolerance_percent NUMERIC(6,3) NOT NULL DEFAULT 5.0,
  independent_matches INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'candidate',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Grundregel für den späteren Automatismus:
-- 1. Neue Einsendung bleibt zunächst in price_submissions.
-- 2. Ähnliche Preise werden innerhalb Produkt + Händler + Jahr gruppiert.
-- 3. Abweichung <= 5 % kann als derselbe Preis-Cluster gelten.
-- 4. Erst ab mindestens 3 unabhängigen Treffern wird automatisch bestätigt.
-- 5. Jede Roh-Einsendung bleibt dauerhaft erhalten; Ausreißer werden nicht gelöscht.
