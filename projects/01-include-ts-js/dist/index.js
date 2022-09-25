'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var src = {};

var calculator = {};

var hasRequiredCalculator;

function requireCalculator () {
	if (hasRequiredCalculator) return calculator;
	hasRequiredCalculator = 1;
	calculator.add = function (a, b) {
	  return a + b;
	};
	return calculator;
}

var output = function () {
    // calculator.js を読み込み、addメソッドによる計算結果を出力する
    var add = requireCalculator().add;
    var result = add(1, 2);
    console.log(result);
};
var output_1 = src.output = output;
output();

exports["default"] = src;
exports.output = output_1;
