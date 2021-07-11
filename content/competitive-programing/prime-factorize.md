# 素因数分解

- 2 以上の整数から順に試し割りをする
- 3 以上では奇数のみ試せばよい

```
# 84(= 2 * 2 * 3 * 7) の場合

84 // 2 -> 42
42 // 2 -> 21
21 % 2 != 0 のため 3 へ
21 // 3 -> 7
...
```

```python
def prime_facotrize(n):
    res = []
    while n % 2 == 0:
        res.append(2)
        n //= 2
    a = 3
    while a * a <= n:
        if n % a == 0:
            res.append(a)
            n //= a
        else:
            a += 2
    if n != 1:
        res.append(n)
    return res
```
