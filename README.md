# osmosis

A demonstration Rails application to show a working configuration of the following things:

 - shakapacker (using babel)
 - react-rails
 - Jest

## Getting started

```bash
# install deps
bundle install
npm install

# run the app
bin/dev

# run the tests
npm test
```

## Caveats

1. react-rails does not support React 19 yet. Attempting to upgrade results in the following error at render time:

```
Uncaught Error: Objects are not valid as a React child (found: object with keys {$$typeof, type, key, props, _owner, _store}). If you meant to render a collection of children, use an array instead
```
