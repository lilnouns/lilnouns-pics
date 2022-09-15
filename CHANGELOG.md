# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0-alpha.18] - 2022-09-15

### <!-- 08 -->Miscellaneous Tasks

- Change `sitemapSize` from `5000` to `500`

## [1.0.0-alpha.17] - 2022-09-14

### <!-- 07 -->Continuous Integrations

- Bump pnpm/action-setup from 2.0.1 to 2.2.2

### <!-- 08 -->Miscellaneous Tasks

- Bump eslint from 8.22.0 to 8.23.1
- Bump @types/node from 18.7.17 to 18.7.18
- Bump @types/react from 18.0.19 to 18.0.20

## [1.0.0-alpha.16] - 2022-09-13

### <!-- 04 -->Refactor

- Add default seo config and information
- Replace background switch group by listbox

### <!-- 08 -->Miscellaneous Tasks

- Update `start` and `export` script over package json

## [1.0.0-alpha.15] - 2022-09-13

### <!-- 02 -->Bug Fixes

- Migrate `heroicons` from `v1` to `v2`

### <!-- 04 -->Refactor

- Add basic sitemap configuration

### <!-- 07 -->Continuous Integrations

- Improve the `build` workflow and add cache

### <!-- 08 -->Miscellaneous Tasks

- Bump eslint from 8.22.0 to 8.23.1
- Bump @types/node from 18.7.9 to 18.7.17
- Bump eslint-config-next from 12.2.5 to 12.3.0
- Bump typescript from 4.7.4 to 4.8.3
- Bump next from 12.2.5 to 12.3.0
- Bump @types/react from 18.0.17 to 18.0.19
- Bump @heroicons/react from 1.0.6 to 2.0.11
- Remove `unoptimized` from experimental configs
- Update start script over package json
- Enable pre and post scripts runing by `pnpm`
- Downgrade `eslint` from `8.23.1` to `8.22.0`

## [1.0.0-alpha.14] - 2022-08-22

### <!-- 07 -->Continuous Integrations

- Add missing environmental variables to the build `workflow`

### <!-- 08 -->Miscellaneous Tasks

- Bump @types/node from 18.7.2 to 18.7.9
- Bump eslint from 8.21.0 to 8.22.0

## [1.0.0-alpha.13] - 2022-08-22

### <!-- 08 -->Miscellaneous Tasks

- Migrate package manager from `yarn` to `pnpm`

## [1.0.0-alpha.12] - 2022-08-14

### <!-- 08 -->Miscellaneous Tasks

- Bump next from 12.2.4 to 12.2.5
- Bump @types/node from 18.6.5 to 18.7.2
- Bump eslint-config-next from 12.2.4 to 12.2.5
- Bump wrangler from 2.0.24 to 2.0.25

## [1.0.0-alpha.11] - 2022-08-09

### <!-- 02 -->Bug Fixes

- Temporary disable some of moods due to display issues

## [1.0.0-alpha.10] - 2022-08-09

### <!-- 08 -->Miscellaneous Tasks

- Bump @types/node from 18.6.4 to 18.6.5
- Bump postcss from 8.4.14 to 8.4.16

## [1.0.0-alpha.9] - 2022-08-09

### <!-- 01 -->Features

- Add mood options to the token id pages

### <!-- 04 -->Refactor

- Improve style of token id page

### <!-- 08 -->Miscellaneous Tasks

- Bump @types/react from 18.0.15 to 18.0.17

## [1.0.0-alpha.8] - 2022-08-09

### <!-- 07 -->Continuous Integrations

- Add the missing env variables to the build workflow

## [1.0.0-alpha.7] - 2022-08-09

### <!-- 04 -->Refactor

- Improve home page and add a loading

## [1.0.0-alpha.6] - 2022-08-08

### <!-- 01 -->Features

- Add new option to remove background of images
- Add download link over image after generated
- Add go to form over home page

### <!-- 02 -->Bug Fixes

- Change mime type of jpeg images

### <!-- 04 -->Refactor

- Replace hardcode urls by environmental variables
- Update token id type and cleanup codes
- Rename environmental variables
- Replace switches by list box on token page

### <!-- 08 -->Miscellaneous Tasks

- Add `@heroicons/react@1.0.6` to the dependencies
- Add `@tailwindcss/forms@0.5.2` to the dependencies
- Add `@tailwindcss/forms` to the tailwind plugins

## [1.0.0-alpha.5] - 2022-08-08

### <!-- 04 -->Refactor

- Improve `getStaticPaths` over token pages

### <!-- 08 -->Miscellaneous Tasks

- Add `react-base64-downloader@2.1.7` to the dependencies

## [1.0.0-alpha.4] - 2022-08-08

### <!-- 02 -->Bug Fixes

- Solve error pages confilct temporary

## [1.0.0-alpha.3] - 2022-08-08

### <!-- 04 -->Refactor

- Remove useless console logs
- Remove fetching nouns data on build

## [1.0.0-alpha.2] - 2022-08-08

### <!-- 01 -->Features

- Add static page generation for lil nouns

### <!-- 04 -->Refactor

- Change body background at document level
- Implement the token id page structure

### <!-- 08 -->Miscellaneous Tasks

- Add `react-hook-form` to dependencies
- Add `@headlessui/react` to the dependencies
- Add `@tailwindcss/aspect-ratio@0.4.0` to the dependencies
- Add `@tailwindcss/aspect-ratio` to the tailwind plugins
- Add the loading skull to the image assets

## [1.0.0-alpha.1] - 2022-08-06

### <!-- 01 -->Features

- Add a new middleware to proxy api requests through workers

### <!-- 04 -->Refactor

- Add token id pages basic structure
- Implement client side fetching on token id pages

### <!-- 08 -->Miscellaneous Tasks

- Update favicon with cleaner version
- Add `wrangler@2.0.24` to dependencies
- Exclude the functions directory to avoid conflicts
- Add `@cloudflare/workers-types@3.14.1` to dependencies
- Create a `tsconfig.json` file in `functions` folder
- Add `serve@14.0.1` to dependencies
- Replace default start script by `serve`

## [1.0.0-alpha.0] - 2022-08-06

### <!-- 04 -->Refactor

- Cleanup home page and styles
- Add `londrina-solid` font from google as default font

### <!-- 05 -->Documentation

- Add the project readme file
- Add the project license file
- Cleanup readme file and revert some of changes

### <!-- 07 -->Continuous Integrations

- Add a configuration file for `dependabot`
- Add new `build` github worklfow to run on pushs

### <!-- 08 -->Miscellaneous Tasks

- Create new next project using creator
- Add `export` to the package scripts
- Configure `unoptimized` in next configs
- Remove api folder due to static generation
- Add `git-clif` configuration file
- Install and initialize tailwind css
- Add a new editorconfig file

<!-- generated by git-cliff -->
