---
type: FIXED
id: next-js-ssg-on-github-pages
title: Next.js の SSG 機能で出力した静的サイトを GitHub Pages で公開する
description:  Next.js の SSG 機能で出力した静的サイトを GitHub Pages で公開する手順です。
createdAt: 2020-09-10
updatedAt: 2020-09-10
tags: []
---

## 環境

- Next.js: 9.5.3

## Next.js で SSG する

`next build` 後に `next export` で、`out` フォルダに HTML, CSS, JS 等が出力される。
`package.json` の `scripts` に 以下あたりを追加しておく。

```json
{
    "scripts": {
        "build": "next build && next export"
    }
}
```

## Next.js アプリのビルド時の注意点

GitHub リポジトリ名が `<ユーザー名>.github.io` の場合、公開 URL は `https://<ユーザー名>.github.io` だが、
それ以外のリポジトリ名の場合、公開 URL は `https://<ユーザー名>.github.io/<リポジトリ名>` になる。

そのため、後者の場合、Next.js をビルドする際は `next.config.js` に設定を追加する必要がある。

```js
module.exports = {
  assetPrefix: '<プレフィックス（本ケースではリポジトリ名）>',
}
```

（参考）https://nextjs.org/docs/api-reference/next.config.js/cdn-support-with-asset-prefix

ただ、上記の設定では開発時も適用される。環境変数で設定を出し分ける方法もあるが、Next.js で用意されている定数 `PHASE_*` を利用する。

```js
const { PHASE_PRODUCTION_BUILD } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_BUILD) {
    return { assetPrefix: '...' };
  }
  return {};
}
```

（参考）https://nextjs.org/docs/api-reference/next.config.js/introduction

## GitHub Actions の設定

`.github/workflows` ディレクトリ配下に適当な名前で以下のような yml を作成。
公開ディレクトリ直下に `.nojekyll` といったファイルがないと、`_next` ディレクトリが公開されないようなので、ビルド後に作成している。

```yaml
name: deploy to github pages
on:
  push:
    branches:
      - master
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2.1.0
        with:
          node-version: 12.x
      - name: install
        run: yarn install
      - name: build
        run: |
          yarn run build
          touch out/.nojekyll
      - name: deploy
        uses: peaceiris/actions-gh-pages@v3.6.4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```
