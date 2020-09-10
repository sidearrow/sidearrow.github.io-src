# sidearrow.github.io

https://sidearrow.github.io/

## リリース手順

リモートの `develop` ブランチにリリース内容をすべて push 済みであること

1. リリースバージョンのタグを付与する

    ```sh
    # create tag
    $ git tag <version>

    # push tag
    $ git push --tags
    ```

2. Pull request を作成し、マージ


## バージョン管理規約

### 開発・記事執筆

- 開発・執筆用のブランチは `develop` から派生させる
  - 開発用ブランチ名は `develop_` から始める
  - 執筆用ブランチ名は `writing_` から始める

### リリース

- リリース時は `develop` ブランチを `master` ブランチにマージする
- リリース時は適切にバージョン番号を付与する

### バージョン番号

- `x.x.x` の形式
- 目安
  - 2 桁目は機能開発時に上げる
  - 3 桁目は記事執筆時に上げる
