/* globals QUnit */

const ESBuild = require("../index.js");
const { createBuilder, createTempDir } = require("broccoli-test-helper");

QUnit.test("it transforms an input file", async (assert) => {
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
