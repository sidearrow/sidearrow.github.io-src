const fs = require('fs');
const path = require('path');

const OUT_DIR = path.resolve(path.join(__dirname, 'out'));
const BASE_URL = 'https://sidearrow.github.io/';

const listPaths = (dir) => {
  if (dir === path.join(OUT_DIR, '_next')) {
    return [];
  }
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((dirent) => {
    if (dirent.isDirectory()) {
      return listPaths(`${dir}/${dirent.name}`);
    }
    if (dirent.isFile()) {
      if (dirent.name.slice(-5) !== '.html') {
        return [];
      }
      const filename =
        dirent.name.slice(-10) === 'index.html' ? '' : dirent.name.slice(0, -5);
      return [`${dir}/${filename}`.replace(OUT_DIR + '/', '')];
    }
    return [];
  });
};

const paths = listPaths(OUT_DIR).map((v) => BASE_URL + v);
const txt = paths.join('\n');

fs.writeFileSync(path.join(OUT_DIR, 'sitemap.txt'), txt);

console.log('Success to generate sitemap.txt');
