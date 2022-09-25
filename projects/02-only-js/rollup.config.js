import commonjs from "@rollup/plugin-commonjs";
import { resolve } from "path";

export default {
  input: resolve(__dirname, "src/index.js"),
  output: {
    file: resolve(__dirname, "dist/index.js"),
    format: "cjs",
  },
  plugins: [
    commonjs({
      transformMixedEsModules: true,
    }),
  ],
  treeshake: false,
};
