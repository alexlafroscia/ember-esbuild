# ember-cli-esbuild

Process your Ember files with esbuild

## Compatibility

- Ember.js v3.16 or above
- Ember CLI v2.13 or above
- Node.js v10 or above

## Installation

```
yarn remove ember-cli-babel
ember install ember-cli-esbuild
```

## Usage

This addon serves to replace [ Babel ](https://babeljs.io) with [ esbuild ](https://esbuild.github.io) in your Ember build pipeline. esbuild is considerably faster than Babel and does most of the same things.

With this addon installed and `ember-cli-babel` removed, that's all there is to do!

## Motivation

Babel is an excellent tool, and an underpinning of most modern web development tool-chains. However, there is considerable activity in this space as developers seek out better-performing tools that can make use of more modern browser features. With how fast esbuild is, the hope is that developers using Ember can leverage the better performance to decrease the build-time of their applications, resulting in a much more satisfying development experience.

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
