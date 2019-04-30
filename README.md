# gatsby-2-starter-base

A basic starter kit for [Gatsby 2][gatsby] following [orangejellyfish][oj]
JavaScript best practices. This kit is intended for the development of simple
static sites.

## Features

- Gatsby 2 support
- React 16 support because Gatsby 2 uses React 16 by default
- Bootstrap 4 support via [reactstrap][rs]
- Unit testing with [Jest][jest] and [Enzyme][enz]
- Global styling with [Sass][sass]

Alternatively, if you are not yet ready to run Gatsby 2 in production, we have
an [equivalent starter kit][g1] for Gatsby 1.

## Usage

The kit requires Node (version 8 or above recommended) and npm (version 5.2 or
above recommended). If those are available on your system you can use [npx][npx]
to quickly scaffold a new site from the kit:

```sh
npx -p gatsby-cli gatsby new $DIR_NAME https://github.com/orangejellyfish/gatsby-2-starter-base
cd $DIR_NAME
npm start
```

## Conventions

Gatsby is a very flexible tool. In order to reduce some of the configuration
overhead associated with such flexibility we favour the following conventions:

- A "layout" is viewed as a common parent to multiple pages. Because Gatsby 2
  does not treat such components differently, layout components are expected
  to be exported from files in the `src/components` directory.

- A "page" is viewed as an individual web page. A page is represented as a
  React component exported from a file in the `src/pages` directory.

- Simple components (those that are not pages and generally receive data as
  props from ancestor components that pull in data from GraphQL) are placed in
  the `src/components` directory.

- GraphQL fragments are placed in the `src/fragments` directory. This means all
  fragments are co-located so you don't have to search through all of your
  components to find one.

[gatsby]: https://next.gatsbyjs.org/
[oj]: https://orangejellyfish.com/
[rs]: https://reactstrap.github.io/
[jest]: https://facebook.github.io/jest/
[enz]: https://github.com/airbnb/enzyme
[sass]: https://sass-lang.com/
[g1]: https://github.com/orangejellyfish/gatsby-starter-base
[ncms]: https://www.netlifycms.org/
[npx]: https://www.npmjs.com/package/npx
