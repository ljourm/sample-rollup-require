const output = () => {
  // calculator.js を読み込み、addメソッドによる計算結果を出力する
  const { add } = require("./calculator.js");

  const result = add(1, 2);
  console.log(result);
};
module.exports.output = output;

output();
