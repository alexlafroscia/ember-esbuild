> **Archival Notice**: This experiment will not come to maturity in its current state. ESBuild is not appropriate for bundling an Ember app on it's own; there is too much that needs to happen that is out-of-scope for ESBuild that is a requirement for packaging an Ember app.
> The future of ESBuild in Ember will look much more like a [Vite](https://vitejs.dev) packager for [Embroider](https://github.com/embroider-build/embroider); see [this PR](https://github.com/embroider-build/embroider/pull/759) for more details.

---

# Ember ESBuild

Ember tooling to process files with [esbuild](https://esbuild.github.io)

## Packages

| Package                                                        | Description                                       |
| :------------------------------------------------------------- | :------------------------------------------------ |
| [`broccoli-esbuild-transpiler`](./broccoli-esbuild-transpiler) | Broccoli plugin for transpiling code with esbuild |
| [`ember-cli-esbuild`](./ember-cli-esbuild)                     | Process your Ember files with esbuild             |

## Project Status

> Not Usable

These packages are not ready for mainstream adoption yet. They're not even ready for risky usage yet!

Please follow along with the [Initial Release milestone](https://github.com/alexlafroscia/ember-esbuild/milestone/1) and [Support Required Babel Behavior](https://github.com/alexlafroscia/ember-esbuild/projects/2) project to get an idea of what is blocking this project from being usable.
