---
type: ARTICLE
id: 2020-07-16-01
title: GIS x Web アプリケーション関連技術について
description: GIS と Web アプリケーション関連の技術について情報収集しており、適宜更新予定です。
createdAt: 2020-07-16
updatedAt: 2020-07-16
tags: [gis, javascript]
---

現状、体系的にまとめる程度の知識がなく、備忘録的なコンテンツになっていること、ご了承ください。

## データ形式

1. ラスターデータ
    - ビットマップ画像

1. ベクターデータ
    - 数値等の属性をデータに含めることが可能
    - シェープファイルが広く用いられている
    - Web アプリケーションでは以下のフォーマットが利用される
        - KML
        - GeoJSON
        - Google Protocol Buffers

## バイナリベクトルタイル

ベクターデータをタイル形式に分割したもの。
[tippecanoe](https://github.com/mapbox/tippecanoe) を利用し、GeoJSON -> Vector tiles (.mbtiles) -> pbf と変換が可能。


## 地図表示のための JavaScript ライブラリ

- Leaflet
- OpenLayers
- Mapbox GL JS

## 独自タイルの配信方法

個人的な利用であれば、静的サイト用のホスティングサービスを利用すると手軽に無料で実現できます。
実運用を考えた場合、AWS S3 あたりが良いのかと。
