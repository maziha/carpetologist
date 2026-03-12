const fs = require('fs');
const report = JSON.parse(fs.readFileSync('./lh-report.json', 'utf8'));

console.log('--- CATEGORY SCORES ---');
Object.values(report.categories).forEach(c => {
  console.log(`${c.title}: ${c.score * 100}`);
});

console.log('\n--- PERFORMANCE METRICS ---');
const metrics = ['first-contentful-paint', 'largest-contentful-paint', 'total-blocking-time', 'cumulative-layout-shift', 'speed-index'];
metrics.forEach(m => {
  const audit = report.audits[m];
  console.log(`${audit.title}: ${audit.displayValue} (Score: ${audit.score})`);
});

console.log('\n--- OPPORTUNITIES (Score < 1.0) ---');
Object.values(report.audits)
  .filter(a => a.score !== null && a.score < 1 && a.details && a.details.type === 'opportunity')
  .sort((a, b) => a.score - b.score)
  .forEach(a => {
    console.log(`${a.title}: ${a.displayValue} (Score: ${a.score})`);
  });

console.log('\n--- ALL FAILED OR WARNING AUDITS (Score < 1.0) ---');
Object.values(report.audits)
  .filter(a => a.score !== null && a.score < 1 && a.score >= 0)
  .sort((a, b) => a.score - b.score)
  .forEach(a => {
    console.log(`${a.title} (Score: ${a.score}): ${a.description.split('.')[0]}`);
  });
