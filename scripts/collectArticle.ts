import fs from 'fs';
import path from 'path';
import marked from 'marked';

const DIR = path.join(__dirname, '../content/articles');

const files = fs
  .readdirSync(DIR)
  .map((f) => ({
    id: path.basename(f, '.md').substr(11),
    path: path.join(DIR, f),
  }))
  .map((f) => ({
    id: f.id,
    html: marked.parse(fs.readFileSync(f.path, 'utf-8')),
  }));

fs.writeFileSync(
  path.join(OUT_DIR, 'dialy.json'),
  JSON.stringify(files, null, 2)
);
