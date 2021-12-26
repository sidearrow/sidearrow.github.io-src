---
type: ARTICLE
title: '約数列挙・素因数分解 - 競プロ実装メモ'
description: 競技プログラミング実装メモシリーズ、約数列挙・素因数分解の実装メモです。
createdAt: 2020-07-22
updatedAt: 2020-07-22
tags: ['compro']
---

# 約数列挙・素因数分解 - 競プロ実装メモ

## 約数列挙

与えられた整数の約数を列挙します。

### 考え方

1. $N$ が与えられた場合、$1$ から $\sqrt{N}$ までの整数 $i$ で試し割りをします
2. $N$ が $i$ で割り切れた場合、$i$ は約数です
3. $j = N \div i$ として、$i \neq j$ の場合、$j$ も約数です

### 実装例

- [AtCoder Beginner Contest 180, C 問題](https://atcoder.jp/contests/abc180/tasks/abc180_c)

```python
# 約数列挙
def factorize(n):
    res = []
    for i in range(1, int(n ** 0.5) + 1):
        if n % i == 0:
            res.append(i)
            j = n // i
            if i != j:
                res.append(j)
    return res


N = int(input())
print(*sorted(factorize(N)), sep="\n")
```

## 素因数分解

### 考え方

1. $N$ が与えられた場合、$n = N$ として、$n$ を $2$ 及び $3$ 以上の奇数 $i$ で割り続けます。
1. $n$ が $i$ で割り切れた場合、$i$ は $N$ の素因数です。$n = n \div i$ として再度同じ $i$ で試し割りをします。
1. $n$ が $i$ で割り切れない場合、次の数で試し割りをします。$i^2 \leq n$ の範囲内でよいです。
1. 最後に $n \neq 1$ の場合は、$n$ も素因数です。

### 実装例

- [AIZU ONLINE JUDGE, NTL_1_A](https://onlinejudge.u-aizu.ac.jp/courses/library/6/NTL/1/NTL_1_A)

```python
# 素因数分解
def prime_facotrize(n):
    res = []
    while n % 2 == 0:
        res.append(2)
        n //= 2
    i = 3
    while i ** 2 <= n:
        if n % i == 0:
            res.append(i)
            n //= i
        else:
            i += 2
    if n != 1:
        res.append(n)
    return res

N = int(input())
print("{}:".format(N), *prime_facotrize(N))
```
