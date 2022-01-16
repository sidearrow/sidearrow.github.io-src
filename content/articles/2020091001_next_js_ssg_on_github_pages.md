---
type: FIXED
id: next-js-ssg-on-github-pages
title: Next.js の SSG 機能で生成した静的サイトを GitHub Actions 経由で GitHub Pages に公開する
description: Next.js の SSG 機能で生成した静的サイトを GitHub Actions 経由で GitHub Pages に公開する手順です。
createdAt: 2020-09-10
updatedAt: 2021-07-11
tags: []
---

# Next.js の SSG 機能で生成した静的サイトを GitHub Actions 経由で GitHub Pages に公開する

## Next.js で SSG する

- `next build` 後に `next export` で、`out` フォルダに HTML, CSS, JS 等が出力される
- `package.json` の `scripts` に 以下あたりを追加しておく

```json
{
  "scripts": {
    "build": "next build && next export"
  }
}
```

## GitHub Actions の設定

- `.github/workflows` ディレクトリ配下に適当な名前で以下のような yml を作成
- 公開ディレクトリ直下に `.nojekyll` といったファイルがないと、`_next` ディレクトリが公開されないようなので、ビルド後に作成している
- [実際の設定ファイル](https://github.com/sidearrow/sidearrow.github.io/blob/master/.github/workflows/deploy.yml)
- GitHub の個人アクセストークンを作成し、環境変数に設定する必要があります

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
