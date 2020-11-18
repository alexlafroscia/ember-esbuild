"use strict";

const ESBuildTranspiler = require("broccoli-esbuild-transpiler");

module.exports = {
  name: require("./package").name,

  setupPreprocessorRegistry(type, registry) {
    registry.add("js", {
      name: "ember-cli-esbuild",
      ext: ["js"],
      toTree: (tree) => this.transpileTree(tree),
    });
  },

  transpileTree(inputTree) {
    return new ESBuildTranspiler(
      inputTree,
      // Options for ESBuild
      {
        loader: "js",
      },
      // Options for Broccoli Persistent Filter
      {
        extensions: ["js"],
        targetExtension: "js",
      }
    );
  },
};
