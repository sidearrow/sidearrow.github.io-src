---
id: statistics-bays
type: ARTICLE
title: 'ベイズの定理を理解する - 統計'
description: ベイズの定理を理解する
createdAt: 2020-10-16
updatedAt: 2020-10-16
tags: ['statistics']
---

# ベイズの定理を理解する

ベイズの定理は以下の式で表される。

$$
P(A \mid B)
=\dfrac{P(B \mid A) P(A)}{P(B)}
=\dfrac{P(B \mid A) P(A)}{P(B \mid A)P(A) + P(B \mid \overline{A})P(\overline{A})}
$$

$P(A \mid B)$ は $B$ が真の場合に $A$ が発生する確率を表す。

数式ではわかりずらいので、具体例を考えて理解する。

- プログラマ
  - 10% の確率でバグがあるプログラムを作成する
- テストプログラム
  - バグがあるプログラムをテストした場合、90% の確率でバグを報告する
  - バグがないプログラムをテストした場合、5% の確率でバグを報告する

事象 $A$, $B$ を定義する。

- 事象 $A$: プログラムにバグがある
- 事象 $B$: 自動テストでバグが報告された

すぐにわかる確率は、

- $P(A) = 0.1$
- $P(B \mid A) = 0.9$
- $P(B \mid \overline{A}) = 0.05$

定理の数式に当てはめていく。

- 左辺 $P(A \mid B)$
  - テストでバグが報告された場合、本当にプログラムにバグがある確率
- 右辺
  - 分母はテストでバグが報告される確率 $P(B)$
  - 分子はプログラムにバグがありテストでバグが報告される確率 $P(B \mid A)\ P(A)$

さらに、テストでバグが報告される確率 $P(B)$ を 2 つの要素に分ける。

- バグがないがバグが報告される確率 $P(B \mid \overline{A})\ P(\overline{A})$
- バグがありバグが報告される確率 $P(B \mid A) P(A)$

まとめると、

$$
\begin{equation*}
\begin{split}
P(A \mid B)
&=\dfrac{P(B \mid A) P(A)}{P(B)}
\\&=\dfrac{P(B \mid A) P(A)}{P(B \mid A)P(A) + P(B \mid \overline{A})P(\overline{A})}
\\&=\dfrac{0.9 \times 0.1}{0.9 \times 0.1 + 0.05 \times 0.9}
\\&=0.\dot6
\end{split}
\end{equation*}
$$
