# GraphQL Demo

## Table of Contents

- [About](#about)
- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#license)

## About

Simple demo for [GraphQL](https://graphql.org) with Node.js.

## Install

```shell
$ git clone https://github.com/naoki-sawada/graphql-demo.git
$ cd graphql-demo
$ npm install
```

## Usage

```shell
$ npm start
```

### Example Query

```shell
$ curl -X POST http://localhost:4000/graphql -H 'Content-Type: application/json' -d '{"query":"{hello(name: \"serval-chan\")}"}'
{"data":{"hello":"Hello serval-chan world!"}}
```

### Example Mutation

```shell
$ curl -X POST http://localhost:4000/graphql -H 'Content-Type: application/json' -d '{"query":"mutation{createUser(name: \"arai-san\")}"}'
{"data":{"createUser":"arai-san"}}
```

## Contribute

Open an [issue](https://github.com/naoki-sawada/graphql-demo/issues/new) or submit [PRs](https://github.com/naoki-sawada/graphql-demo/pulls).

## License

[MIT](LICENSE).
