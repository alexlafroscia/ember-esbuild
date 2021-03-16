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

  async processString(content, relativePath) {
    const result = await esbuild.transform(content, {
      ...this.esbuildTransformOptions,
      sourcefile: relativePath,
    });

    return result.code;
  }
};
