// Zeitreise-Einkaufswagen – Validierungslogik für spätere Nutzer-Einreichungen
// Keine direkte Änderung der historischen Rohdaten. Erstellt nur Kandidaten/Cluster.

function priceWithinTolerance(a, b, tolerancePercent = 5) {
  if (a <= 0 || b <= 0) return false;
  return Math.abs(a - b) / ((a + b) / 2) * 100 <= tolerancePercent;
}

function buildValidationClusters(submissions, rules = {}) {
  const tolerance = rules.nearMatchPercent ?? 5;
  const minMatches = rules.minIndependentMatches ?? 3;
  const groups = new Map();

  for (const s of submissions) {
    const key = [
      s.productId,
      s.retailerId || "other",
      new Date(s.observedAt).getFullYear()
    ].join("|");
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(s);
  }

  const result = [];

  for (const [key, items] of groups) {
    const clusters = [];

    for (const item of items) {
      let cluster = clusters.find(c =>
        priceWithinTolerance(c.representativePrice, item.submittedPrice, tolerance)
      );

      if (!cluster) {
        cluster = {
          key,
          representativePrice: item.submittedPrice,
          submissions: []
        };
        clusters.push(cluster);
      }

      cluster.submissions.push(item);

      // Laufenden Repräsentanten robust über den Median bestimmen.
      const prices = cluster.submissions
        .map(x => x.submittedPrice)
        .sort((a,b) => a-b);
      cluster.representativePrice =
        prices[Math.floor(prices.length / 2)];
    }

    for (const c of clusters) {
      const independentUsers = new Set(
        c.submissions
          .map(x => x.submittedBy)
          .filter(Boolean)
      );

      result.push({
        key: c.key,
        representativePrice: c.representativePrice,
        matches: c.submissions.length,
        independentMatches: independentUsers.size,
        status: independentUsers.size >= minMatches
          ? "auto-approved"
          : "candidate",
        submissions: c.submissions
      });
    }
  }

  return result;
}
