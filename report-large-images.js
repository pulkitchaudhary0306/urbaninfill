const fs = require('fs');
const path = require('path');

const TARGET_FOLDERS = [
  path.join(__dirname, 'public', 'luxuryhomes'),
  path.join(__dirname, 'public', 'projects')
];

const THRESHOLD_KB = 200;
const THRESHOLD_BYTES = THRESHOLD_KB * 1024;

function walk(dir) {
  const res = [];
  if (!fs.existsSync(dir)) return res;
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const it of items) {
    const full = path.join(dir, it.name);
    if (it.isDirectory()) res.push(...walk(full));
    else if (it.isFile()) res.push(full);
  }
  return res;
}

const large = [];
for (const folder of TARGET_FOLDERS) {
  const files = walk(folder);
  for (const f of files) {
    try {
      const s = fs.statSync(f);
      if (s.size > THRESHOLD_BYTES) large.push({ path: f, kb: (s.size/1024).toFixed(2) });
    } catch (e) {}
  }
}

if (large.length === 0) console.log(`No images > ${THRESHOLD_KB}KB found.`);
else {
  console.log(`Found ${large.length} images > ${THRESHOLD_KB}KB:\n`);
  for (const i of large) console.log(`${i.path} — ${i.kb} KB`);
}
