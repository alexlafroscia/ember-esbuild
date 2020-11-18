"use strict";

const Filter = require("broccoli-persistent-filter");
const esbuild = require("esbuild");
const { name } = require("./package.json");

module.exports = class ESBuild extends Filter {
  constructor(inputTree, esbuildTransformOptions = {}, filterOptions = {}) {
    super(inputTree, { ...filterOptions, name });

    this.esbuildTransformOptions = esbuildTransformOptions;
  }

  baseDir() {
    return __dirname;
  }

  processString(content, relativePath) {
    const result = esbuild.transformSync(content, {
      ...this.esbuildTransformOptions,
      sourcefile: relativePath,
    });

    return result.code;
  }
};
