import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import minifyHTML from "rollup-plugin-minify-html-literals";

export default {
  input: "index.js",
  output: {
    file: "dist.js",
    format: "iife",
  },
  plugins: [
    nodeResolve({ browser: true }),
    minifyHTML({
      options: {
        minifyOptions: {
          customEventAttributes: [],
        },
      },
    }),
    terser(),
  ],
};
