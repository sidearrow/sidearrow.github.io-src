# [CSS] WEB ページのレイアウトを整理する（TailwindCSS の助けを借りて）

## パターンで共通の要件

- ヘッダー
  - ページの最上部に表示する
  - スクロール追従なし
- メインコンテンツ
  - ヘッダーとフッターの間に表示するメインのコンテンツ
- フッター
  - ページの最下部に表示する
  - メインコンテンツが少ない場合、画面の最下部に表示する
  - スクロール追従なし
- できる限り各要素に固定の高さを設定しない

### 共通の要件を満たすベースの HTML

- `<html>`, `<body>` には `height: 100vh` を設定
  - 高さを画面一杯に広げる
- `<body>` には `display: flex`, `flex-direction: column` を設定
  - flex アイテムを縦に並べる
- `<main>` には `flex-grow: 1` を設定
  - flex コンテナの空間一杯に広げる

```html
<html class="h-screen">
  <body class="h-screen flex flex-col">
    <header>HEADER</header>
    <main class="flex-grow">MAIN CONTENT</main>
    <footer>FOOTER</footer>
  </body>
</html>
```

## スクロール追従ヘッダー

- `<header>` に `position: sticky`, `top: 0` を設定

```html
<html class="h-screen">
  <body class="h-screen flex flex-col">
    <header class="sticky top-0">HEADER</header>
    <main class="flex-grow">MAIN CONTENT</main>
    <footer>FOOTER</footer>
  </body>
</html>
```

## スクロール追従フッター

- `<footer>` に `position: sticky`, `bottom: 0` を設定

```html
<html class="h-screen">
  <body class="h-screen flex flex-col">
    <header>HEADER</header>
    <main class="flex-grow">MAIN CONTENT</main>
    <footer class="sticky bottom-0">FOOTER</footer>
  </body>
</html>
```

## 画面固定ヘッダー・フッター（メインコンテンツのみスクロール）

- `<main>` に `overflow: auto` を設定

```html
<html class="h-screen">
  <body class="h-screen flex flex-col">
    <header>HEADER</header>
    <main class="flex-grow overflow-auto">MAIN CONTENT</main>
    <footer>FOOTER</footer>
  </body>
</html>
```

## サイドコンテンツ

- `<aside>` と `<main>` の親に `display: flex`, `flex-direction: column` を設定
- `<main>` に `flex-glow: 1` を設定

```html
<html class="h-screen">
  <body class="h-screen flex flex-col">
    <header class="sticky top-0">HEADER</header>
    <div class="flex flex-row flex-grow">
      <aside>SIDE CONTENT</aside>
      <main class="flex-grow">MAIN CONTENT</main>
    </div>
    <footer>FOOTER</footer>
  </body>
</html>
```

## スクロール追従サイドコンテンツ
