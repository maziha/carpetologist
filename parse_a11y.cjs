const fs = require('fs');
const report = JSON.parse(fs.readFileSync('./lh-report.json', 'utf8'));

const audits = ['button-name', 'color-contrast', 'link-name'];

audits.forEach(id => {
  const audit = report.audits[id];
  if (audit && audit.score === 0) {
    console.log(`\n=== ${audit.title} ===`);
    if (audit.details && audit.details.items) {
      audit.details.items.forEach(item => {
        console.log(item.node ? item.node.snippet || item.node.selector : item);
      });
    }
  }
});
