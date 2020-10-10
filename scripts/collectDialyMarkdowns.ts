import fs from 'fs';
import path from 'path';
import marked from 'marked';

const INPUT_DIR = path.join(__dirname, '../content/dialy');
const OUT_DIR = path.join(__dirname, '../content/out');

const files = fs
  .readdirSync(INPUT_DIR)
  .map((f) => ({ id: path.basename(f, '.md'), path: path.join(INPUT_DIR, f) }))
  .map((f) => ({
    id: f.id,
    html: marked.parse(fs.readFileSync(f.path, 'utf-8')),
  }));

fs.writeFileSync(
  path.join(OUT_DIR, 'dialy.json'),
  JSON.stringify(files, null, 2)
);
