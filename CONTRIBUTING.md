# Contributing

Thanks for showing interest in contributing to ILLA, we think you are the best one!

Here's the table of contents:

- Setup the Project
    - Commands
- Create a New Component
    - Directory Structure
- Make a Pull Request
    - Commit Convention
    - Steps to PR
    - Some Rules

## Setup the Project

1. Fork the repo (click the Fork button at the top right of [this page](https://github.com/illacloud/illa-design)
2. Clone your fork locally
3. Setup all the dependencies and packages by running `yarn`.

> If you have some problems, you can [take an issue](https://github.com/illacloud/illa-design/issues/new/choose) or talk with others on [Discord](https://discord.gg/2tGBuJkgd6)

### Commands:

```bash
# start the storybook to preview the components
$ yarn storybook

# lint all code
$ yarn lint

# build all components
$ yarn build-all-components

# run jest & cypress to test all components
$ yarn test

# open cypress test UI on chrome
$ npx cypress run-ct -b chrome

# create a new component
$ yarn plop

# pull & buld & start storybook
$ yarn build-develop
 
# build storybook project for publish 
$ yarn build-storybook
  
# only run jest
$ yarn unit-test
```

## Create a New Component

You can run the `plop` script to create a new component.

```bash
$ yarn plop
````

Then only add some props you can create a new component.

[Know more about Plop](https://github.com/plopjs/plop)

You can find it in "packages/{component name}"

### Directory Structure

```
├── src 
│   ├── index.ts                  # index file for this component.
│   ├── {name}.tsx                # main code file
│   ├── style.tsx                 # emotion css style
│   ├── interface.ts              # the component props
│   └── vite-env.d.ts             # vite flag
├── stories
│   └── {name}.stories.tsx        # the storybook file
├── tests
│   ├── __snapshots__             # jest snapshot directory
│   │   └── {name}.test.tsx.snap  # auto generate snapshot file
│   ├── {name}.e2e.tsx            # cypress test cases
│   └── {name}.test.tsx           # jest test cases
├── dist                          # build production
├── .gitignore                    # gitignore file
├── CHANGELOG.md                  # component changelog
├── tsconfig.json                 # typescript build config
├── vite.config.ts                # vite config
└── package.json                  # this component dependencies(monorepo)
```

## Make a Pull Request

If you have some changes, you can make a pull request to let ILLA be better!

### Commit Convention

This project uses the [commitlint](https://github.com/conventional-changelog/commitlint) to lint commit.

Please follow the [conventional](https://www.conventionalcommits.org/en/v1.0.0/) to add the commit messages.

We use the [husky](https://github.com/typicode/husky) to check the commit message before every commit action.

### Steps to PR

1. Fork of the repository and clone your fork
2. Create a new branch out of the `develop` branch. We follow the convention `[type/scope]`. For example `fix/accordion-hook` or `docs/menu-typo`. `type` can be either `docs`, `fix`, `feat`, `build`, or any other conventional commit type. `scope` is just a short id that describes the scope of work.
3. Make and commit your changes following the `Commit Convention`, As you develop, you can run `yarn lint` and `yarn lint` to make sure everything works as expected. Please note that you might have to run `yarn` first in order to install all dependencies.
4. We have a pull request template, you only need to add some necessary info to let others know what this pr does.

### Some Rules

1. We need complete unit testing, so please check your test code before committing.
2. Try not to reduce unit test coverage.
