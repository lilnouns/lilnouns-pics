# Changelog

All notable changes to this project will be documented in this file.

## [1.2.27] - 2023-11-11

### Refactor

- Improve font usage for better CSS variable compatibility
- Extracted layout to a separate component

### Miscellaneous Tasks

- Add PT-Root-UI and Londrina Solid fonts to the project
- Update `fontFamily` in `tailwind.config.js`
- Disable webpack build worker in `next.config.js` file

## [1.2.26] - 2023-11-11

### Bug Fixes

- Solve some minor issues and update dependencies

## [1.2.25] - 2023-10-31

### Bug Fixes

- Solve some minor issues and update dependencies

## [1.2.24] - 2023-10-30

### Miscellaneous Tasks

- Update Node version in `.nvmrc`

## [1.2.23] - 2023-10-30

### Miscellaneous Tasks

- Update build command in Github Actions workflow

## [1.2.22] - 2023-10-30

### Miscellaneous Tasks

- Add `output` property in next config and optimize scripts
- Implement experimental webpack builder in Next.js configuration

## [1.2.21] - 2023-10-30

### Bug Fixes

- Solve some minor issues and update dependencies

## [1.2.20] - 2023-10-30

### Bug Fixes

- Solve some minor issues and update dependencies

## [1.2.19] - 2023-07-01

### Documentation

- Add funding to the packge configs
- Add crypto donate badge to the project readme
- Set sponsorships configuration for github

### Miscellaneous Tasks

- Switch `package-ecosystem` from `npm` to `pnpm` for Dependabot
- Change `package-ecosystem` back to `npm` on Dependabot configs
- Add write permission to contents in GitHub release.
- Update Node.js versions in workflow

## [1.2.15] - 2023-05-18

### Miscellaneous Tasks

- Add node version 20 on `build` workflow

## [1.2.13] - 2023-05-07

### Miscellaneous Tasks

- Cleanup and improve `pnpm` workflow configs
- Change `open-pull-requests-limit` from 10 to 20
- Remove `skip-checks` from `pnpm` workflow

## [1.2.12] - 2023-04-27

### Miscellaneous Tasks

- Bump `pnpm` version from `^7` to `^8` on `build` workflow

## [1.2.11] - 2023-04-26

### Documentation

- Migrate to new github issue templates

### Miscellaneous Tasks

- Bump `pnpm` version from 7 to 8 on `pnpm` workflow

## [1.2.9] - 2023-04-08

### Miscellaneous Tasks

- Improve mangling class names on production

## [1.2.0] - 2023-02-04

### Features

- Configure `@` as import alias path

### Refactor

- Replace `@` as import alias for relative paths

## [1.1.3] - 2023-01-23

### Documentation

- Add basic guidelines to contributing to the repository
- Update twitter badge due to depreciation (#141)

## [1.1.2] - 2023-01-22

### Documentation

- Add issue templates for bug report and feature requests

## [1.1.1] - 2023-01-18

### Bug Fixes

- Improve regex rules for `mangle-css-class-webpack-plugin`

### Refactor

- Replace `classNames` function by `clsx`

## [1.1.0] - 2023-01-15

### Features

- Add `tailwind` class names obfuscation by `webpack`

### Refactor

- Add missing `tw-` prefix for css classes

## [1.0.6] - 2023-01-15

### Miscellaneous Tasks

- Change `open-pull-requests-limi` from 10 to 20
- Specifiy node version of cloudflare pages

## [1.0.5] - 2023-01-14

### Miscellaneous Tasks

- Change `save-prefix` from carrot to exact version

## [1.0.4] - 2023-01-04

### Miscellaneous Tasks

- Improve `build` workflow by cache `pnpm` and skip concurrences
- Skip running `pnpm` workflow on ci dependencies
- Add missing environmental variables over `build` workflow

### Revert

- Bump actions/checkout from 3.1.0 to 3.2.0

## [1.0.3] - 2023-01-02

### Miscellaneous Tasks

- Remove pull request links from changelogs

## [1.0.2] - 2023-01-02

### Miscellaneous Tasks

- Add a new `release` workflow to create releases

## [1.0.1] - 2023-01-02

### Documentation

- Add some status badges to the project readme

### Miscellaneous Tasks

- Setup stale bot to closes abandoned issues
- Add a link to the github repository to the header

## [1.0.0] - 2022-12-17

### Documentation

- Solve some type and update readme file

## [1.0.0-alpha.27] - 2022-11-03

### Miscellaneous Tasks

- Add the `pnpm` workflow to update lock file
- Update and improve the `build` workflow

## [1.0.0-alpha.26] - 2022-10-25

### Bug Fixes

- Update copy right message

## [1.0.0-alpha.25] - 2022-10-25

### Miscellaneous Tasks

- Add node version `19` to the `build` workflow

## [1.0.0-alpha.24] - 2022-10-25

### Features

- Improve index and token pages appearance

## [1.0.0-alpha.23] - 2022-10-24

### Miscellaneous Tasks

- Patch `set-output` on `build` workflow
- Add missing environmental variables for `build` workflow

## [1.0.0-alpha.21] - 2022-10-21

### Miscellaneous Tasks

- Add `18.x` on `build` workflow `node-version`

## [1.0.0-alpha.20] - 2022-09-22

### Miscellaneous Tasks

- Enable automatic install of peer dependencies

## [1.0.0-alpha.18] - 2022-09-15

### Miscellaneous Tasks

- Change `sitemapSize` from `5000` to `500`

## [1.0.0-alpha.16] - 2022-09-13

### Refactor

- Add default seo config and information
- Replace background switch group by listbox

### Miscellaneous Tasks

- Update `start` and `export` script over package json

## [1.0.0-alpha.15] - 2022-09-13

### Bug Fixes

- Migrate `heroicons` from `v1` to `v2`

### Refactor

- Add basic sitemap configuration

### Miscellaneous Tasks

- Remove `unoptimized` from experimental configs
- Update start script over package json
- Enable pre and post scripts runing by `pnpm`
- Improve the `build` workflow and add cache

## [1.0.0-alpha.14] - 2022-08-22

### Miscellaneous Tasks

- Add missing environmental variables to the build `workflow`

## [1.0.0-alpha.13] - 2022-08-22

### Miscellaneous Tasks

- Migrate package manager from `yarn` to `pnpm`

## [1.0.0-alpha.11] - 2022-08-09

### Bug Fixes

- Temporary disable some of moods due to display issues

## [1.0.0-alpha.9] - 2022-08-09

### Features

- Add mood options to the token id pages

### Refactor

- Improve style of token id page

## [1.0.0-alpha.8] - 2022-08-09

### Miscellaneous Tasks

- Add the missing env variables to the build workflow

## [1.0.0-alpha.7] - 2022-08-09

### Refactor

- Improve home page and add a loading

## [1.0.0-alpha.6] - 2022-08-08

### Features

- Add new option to remove background of images
- Add download link over image after generated
- Add go to form over home page

### Bug Fixes

- Change mime type of jpeg images

### Refactor

- Replace hardcode urls by environmental variables
- Update token id type and cleanup codes
- Rename environmental variables
- Replace switches by list box on token page

### Miscellaneous Tasks

- Add `react-base64-downloader@2.1.7` to the dependencies
- Add `@tailwindcss/forms` to the tailwind plugins

## [1.0.0-alpha.5] - 2022-08-08

### Refactor

- Improve `getStaticPaths` over token pages

## [1.0.0-alpha.4] - 2022-08-08

### Bug Fixes

- Solve error pages confilct temporary

## [1.0.0-alpha.3] - 2022-08-08

### Refactor

- Remove useless console logs
- Remove fetching nouns data on build

## [1.0.0-alpha.2] - 2022-08-08

### Features

- Add static page generation for lil nouns

### Refactor

- Change body background at document level
- Implement the token id page structure

### Miscellaneous Tasks

- Add `@tailwindcss/aspect-ratio` to the tailwind plugins
- Add the loading skull to the image assets

## [1.0.0-alpha.1] - 2022-08-06

### Features

- Add a new middleware to proxy api requests through workers

### Refactor

- Add token id pages basic structure
- Implement client side fetching on token id pages

### Miscellaneous Tasks

- Update favicon with cleaner version
- Exclude the functions directory to avoid conflicts
- Create a `tsconfig.json` file in `functions` folder
- Replace default start script by `serve`

## [1.0.0-alpha.0] - 2022-08-06

### Refactor

- Cleanup home page and styles
- Add `londrina-solid` font from google as default font

### Documentation

- Add the project readme file
- Add the project license file
- Cleanup readme file and revert some of changes

### Miscellaneous Tasks

- Create new next project using creator
- Add a configuration file for `dependabot`
- Add new `build` github worklfow to run on pushs
- Add `export` to the package scripts
- Configure `unoptimized` in next configs
- Remove api folder due to static generation
- Add `git-clif` configuration file
- Install and initialize tailwind css
- Add a new editorconfig file

<!-- generated by git-cliff -->
