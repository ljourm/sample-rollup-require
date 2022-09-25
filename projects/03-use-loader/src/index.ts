import { loadCalculator } from "./calculator-loader";

export const output = () => {
  // calculator.js を読み込み、addメソッドによる計算結果を出力する
  const { add } = loadCalculator();

  const result = add(1, 2);
  console.log(result);
};

output();
