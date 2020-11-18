/* globals QUnit */

const ESBuild = require("../index.js");
const { createBuilder, createTempDir } = require("broccoli-test-helper");

QUnit.test("it can transform TypeScript to JavaScript", async (assert) => {
  assert.expect(1);

  const input = await createTempDir();

  try {
    const subject = new ESBuild(
      input.path(),
      { loader: "ts" },
      { extensions: ["js", "ts"], targetExtension: "js" }
    );
    const output = createBuilder(subject);

    try {
      // Create a faux TypeScript file
      input.write({
        "index.ts": 'let x: string = "foo";\n',
      });

      await output.build();

      // Did the transform work correctly?
      assert.deepEqual(output.read(), {
        "index.js": 'let x = "foo";\n',
      });
    } finally {
      await output.dispose();
    }
  } finally {
    await input.dispose();
  }
});

QUnit.test("it can remove JSX from a file", async (assert) => {
  assert.expect(1);

  const input = await createTempDir();

  try {
    const subject = new ESBuild(
      input.path(),
      { loader: "jsx" },
      { extensions: ["js"], targetExtension: "js" }
    );
    const output = createBuilder(subject);

    try {
      // Create a faux TypeScript file
      input.write({
        "index.js": '<div class="foo"></div>\n',
      });

      await output.build();

      // Did the transform work correctly?
      assert.deepEqual(output.read(), {
        "index.js":
          '/* @__PURE__ */ React.createElement("div", {\n  class: "foo"\n});\n',
      });
    } finally {
      await output.dispose();
    }
  } finally {
    await input.dispose();
  }
});
