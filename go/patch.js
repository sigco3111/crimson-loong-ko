// One-off: add the Korean overlay loader before </body> in index.html. Runs on the GitHub runner.
const fs = require('fs');

const file = 'index.html';
const tag = '<script src="ko-overlay.js"></script>';

for (const need of ['ko-overlay.js', 'i18n/ko.json']) {
  if (!fs.existsSync(need)) {
    console.error('missing ' + need);
    process.exit(1);
  }
}

let html = fs.readFileSync(file, 'utf8');
if (html.indexOf('ko-overlay.js') !== -1) {
  console.log('already patched, nothing to do');
  process.exit(0);
}

const at = html.lastIndexOf('</body>');
if (at < 0) {
  console.error('no </body> found');
  process.exit(1);
}

html = html.slice(0, at) + tag + '\n' + html.slice(at);
fs.writeFileSync(file, html);
console.log('patched: injected overlay loader at byte ' + at + ', new length ' + html.length);
