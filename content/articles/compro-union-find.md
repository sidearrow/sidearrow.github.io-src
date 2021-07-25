---
type: ARTICLE
title: 'Union-Find - 競プロ実装メモ'
description: 競技プログラミング実装メモシリーズ、Union-Find の実装メモです。
createdAt: 2020-07-25
updatedAt: 2020-07-25
tags: ['compro']
---

# Union-Find - 競プロ実装メモ

## 概要

Union-Find は要素のグループ分けを木構造で管理するデータ構造です。

$N$ 個の要素があるとして、初期状態ではすべて別々のグループに属しています。
Union-Find は主に以下の機能を実現します。

- 要素 $x$ が属するグループと要素 $y$ が属するグループを結合する
- 要素 $x$ が属するグループの根の要素を取得する

## 実装例

- union by size と経路圧縮をしています

```python
class UnionFind:
    def __init__(self, n):
        self.par = [-1] * n
        self.size = [1] * n

    def get_root(self, x):
        if self.par[x] == -1:
            return x
        self.par[x] = self.get_root(self.par[x])
        return self.par[x]

    def unite(self, x, y):
        rx, ry = self.get_root(x), self.get_root(y)
        if rx == ry:
            return
        if self.size[ry] > self.size[rx]:
            rx, ry = ry, rx
        self.par[ry] = rx
        self.size[rx] += self.size[ry]
```
