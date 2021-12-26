---
type: ARTICLE
title: 'ワーシャルフロイド法 - 競プロ実装メモ'
description: 競技プログラミング実装メモシリーズ、ワーシャルフロイド法の実装メモです。
createdAt: 2020-07-18
updatedAt: 2020-07-18
tags: ['compro']
---

# ワーシャルフロイド法 - 競プロ実装メモ

## 概要

グラフ上の全頂点間の最短経路コストを求める。

## 考え方

$dp[k][i][j]$ を頂点 $k - 1$ 以下のみを使った場合の頂点 $i$ から頂点 $j$ への最短経路コストとする動的計画法を考えます。

- 初期条件

$$
d[0][i][j] =
  \begin{cases}
    0 & \textrm (i = j) \newline
    辺i \rightarrow j のコスト & \textrm (辺が存在する) \newline
    \infty & \textrm (辺が存在しない)
  \end{cases}
$$

- 遷移

$$
dp[k + 1][i][j] = min(dp[k][i][j], dp[k][i][k] + dp[k][k][j])
$$

## 実装例

- [GRL_1_C < Problems | Aizu Online Judge](https://onlinejudge.u-aizu.ac.jp/problems/GRL_1_C)

```python
INF = float("inf")

# 入力、初期化
V, E = map(int, input().split())
dp = [[INF] * V for _ in range(V)]
for _ in range(E):
    s, t, d = map(int, input().split())
    dp[s][t] = d
for v in range(V):
    dp[v][v] = 0

# DP 遷移
for k in range(V):
    for i in range(V):
        for j in range(V):
            dp[i][j] = min(dp[i][j], dp[i][k] + dp[k][j])

# 負閉路の有無をチェック
for v in range(V):
    if dp[v][v] < 0:
        print("NEGATIVE CYCLE")
        exit()

# 出力
for a in dp:
    print(*["INF" if b == INF else b for b in a])
```
