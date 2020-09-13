---
type: FIXED
id: laravel-single-action-controller
title: Laravel Single Action Controller のすすめ
description: 
createdAt: 2020-09-13
updatedAt: 2020-09-13
tags: []
---

こちらの話題については様々な記事等で既出ではありますが、個人的に好きな方法のため書かせていただきました。

## Single Action Controller とは

一つのアクションのみが定義された Controller クラスを指す。
`artisan` コマンドで Controller を作成する際に、オプション `--invokable` を付与する。

```sh
$ php artisan make:controller <name> --invokable
```

Controller クラス内には `__invoke()` メソッドが定義されており、こちらのメソッドで Request オブジェクトを受け取り、 Response オブジェクトを返却する。
`__invoke()` メソッドは PHP のマジックメソッドで、オブジェクトを関数として呼び出した際に実行される。

**（参考）**

- https://laravel.com/docs/8.x/controllers#single-action-controllers
- https://www.php.net/manual/ja/language.oop5.magic.php#object.invoke


## Single Action Controller のメリット・デメリット

### メリット

#### 一つの Controller クラス内に存在するアクションが減り、見通しが良くなる

Fat, Skinny Controller の話題について、個人的には各アクション内の処理も対象かと思いますので、Controller が Fat になるのを避けるには、アクション内の実装にも気をつけたいところです。

#### Router に登録する際の記述が簡潔

引数のアクション部分に Controller クラスの完全修飾名を `:class` を使用して指定すればよい。
Single Action Controller でない場合の記述では、メソッド名を間違えていもそのルートにアクセスしない限りエラーにならないので、そちらが回避できるのも Single Action Controller のメリットでしょうか。

```php
use App\Http\Controllers\HogeController;
use App\Http\Controllers\FugaController;

# Single Action Controller
Route::get('/hoge', HogeController::class);

# Not Single Action Controller
Route::get('/fuga', [FugaController::class, 'index']);
```

### デメリット

#### Resource Controller が使用できない

要件にあった場合、Resource Controller を利用すると圧倒的に記述量を減らすことが可能です。そのような場合、Resource Controller と併用することを検討したいです。

**（参考）**

- https://laravel.com/docs/8.x/controllers#resource-controllers
