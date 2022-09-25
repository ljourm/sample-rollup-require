'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

const loadCalculator = () => {
  return requireCalculator();
};

var output = function () {
    // calculator.js を読み込み、addメソッドによる計算結果を出力する
    var add = loadCalculator().add;
    var result = add(1, 2);
    console.log(result);
};
output();

exports.output = output;
