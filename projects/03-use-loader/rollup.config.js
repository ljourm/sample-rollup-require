import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { resolve } from "path";

export default {
  input: resolve(__dirname, "src/index.ts"),
  output: {
    file: resolve(__dirname, "dist/index.js"),
    format: "cjs",
  },
  plugins: [
    typescript({
      tsconfig: resolve(__dirname, "tsconfig.json"),
    }),
    commonjs({ transformMixedEsModules: true }),
  ],
};
