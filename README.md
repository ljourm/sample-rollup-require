# Sample Rollup TypeScript Require

## 概要

JavaScriptやTypeScriptに記述したrequireをRollupの出力に含めるサンプル。

## 導入したパッケージ

- rollup
- @rollup/plugin-commonjs
- @rollup/plugin-typescript + 依存パッケージ

## サンプル一覧

|No.|方法|使用条件|バンドル後のrequire|サンプルコード|
|---|----|----|----|----|
|00|Rollupオプションなし|特になし|requireがそのまま出力される|[00-first-issue](./projects/00-first-issue)|
|01|`plugin-commonjs`に`extensions: [".js", ".ts"]`を指定|tsconfigで`"module": "CommonJS"`を設定|バンドルされる|[01-include-ts-js](./projects/01-include-ts-js)|
|02|`plugin-commonjs`に`transformMixedEsModules: true`を指定|JavaScriptのみを使用|バンドルされる|[02-only-js](./projects/02-only-js)|
|03|02の設定 + requireをJavaScriptに記述し、それをTypeScriptからimport|JavaScriptとTypeScriptをハイブリッドで使用|バンドルされる|[03-use-loader](./projects/03-use-loader)|

## 実行方法

詳細は[package.json](./package.json)のscriptsを参照。
以下に実行例を記載。

```sh
# No.00をバンドルする
npm run bundle:00
# or yarn bundle:00

# No.00を実行する - 備考: No.00はエラー終了となる。それ以外は3(1+2の結果)が出力される
npm run run:00
# or yarn run:00
```
