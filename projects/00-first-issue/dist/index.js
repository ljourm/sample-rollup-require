'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var output = function () {
    // calculator.js を読み込み、addメソッドによる計算結果を出力する
    var add = require("./calculator.js").add;
    var result = add(1, 2);
    console.log(result);
};
output();

exports.output = output;
