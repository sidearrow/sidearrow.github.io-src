---
title: phpstorm-stubs を Visual Studio Code で利用する
description: phpstorm-stubs を Visual Studio Code で利用する
createdAt: 2022-01-15
updatedAt: 2022-01-15
tags: []
---

# phpstorm-stubs を Visual Studio Code で利用する

Visual Studio Code(VSCode) の拡張 [PHP Intelephense](https://github.com/bmewburn/vscode-intelephense) を利用して、phpstorm-stubs でコードを補完する手順。

1. [GitHub の phpstorm-stubs リポジトリ](https://github.com/JetBrains/phpstorm-stubs) からソースを入手する。
2. VSCode の設定に phpstorm-stubs のディレクトリパスを追加する

```json
"intelephense.environment.includePaths": [
  "<path to phpstorm-stubs>"
]
```

## 参考資料

- [existing phpstorm-stubs doesn't work with xdebug functions · Issue #1594 · bmewburn/vscode-intelephense](https://github.com/bmewburn/vscode-intelephense/issues/1594) 2021/01/15 閲覧
