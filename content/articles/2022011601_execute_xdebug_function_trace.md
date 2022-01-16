---
title: Laravel で Xdebug の function trace を動かす
description: Xdebug の function trace を動かした際のメモ
createdAt: 2022-01-16
updatedAt: 2022-01-16
tags: []
---

# Laravel で Xdebug の function trace を動かす

## 環境

- Docker コンテナ `php:8.1.1-apach` をベースに Xdebug をインストール

```
# php -v
PHP 8.1.1 (cli) (built: Dec 21 2021 19:41:31) (NTS)
Copyright (c) The PHP Group
Zend Engine v4.1.1, Copyright (c) Zend Technologies
    with Xdebug v3.1.2, Copyright (c) 2002-2021, by Derick Rethans
```

## 動かす

- `php.ini` の `xdebug.mode` に `trace` を設定する。
  - https://xdebug.org/docs/install#mode

```ini
xdebug.mode=trace
```

- `public/index.php` の最初に `xdebug_start_trace()`、最後に `xdebug_stop_trace()` を追加する。

```
// 最初
xdebug_start_trace("../storage/logs/function_trace_" .date("YmdHis"));

// 最後
xdebug_stop_trace();
```

- `storage/logs` 下に圧縮されて出力される
- 約 3 万行あって読むのがつらい

```
# wc -l function_trace_20220116040917.xt 
29949 function_trace_20220116040917.xt
```

- `xdebug.trace_format` の設定を変更すると、出力フォーマットを変更できる
  - https://xdebug.org/docs/trace#trace_format
    - 0: 読みやすい
    - 1: プログラムで処理しやすい
      - フォーマットは上のリンク先に記載されている
    - 2: HTML
      - 今回出力されたファイルは内容が多すぎて見づらかった

- `xdebug.trace_format=1` に設定して必要な部分のみ取り出すのがよさそう……