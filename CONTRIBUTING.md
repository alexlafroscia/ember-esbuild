# How To Contribute

## Installation

This project is configured to provide a Node and Yarn version using [Volta](https://volta.sh). It's not required for development, but it does ensure you're using the expected versions of those tools.

```
git clone git@github.com:alexlafroscia/ember-esbuild.git
cd ember-esbuild
yarn install
```

## Linting

Format-checking is performed in CI as well as locally through a Git hook, configured through Husky and `lint-staged`. To manually run linting, you can run

```
yarn lint
```

## Running tests

Each package has some means of testing that can be performed by running `yarn test` inside the package.

You can also run this from the root level to run tests for _all_ of the packages (though be warned: this can take some time)
