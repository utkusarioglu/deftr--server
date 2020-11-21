# Scripts conventions

## Monorepo scripts

### Starting

- start is for starting in production
- start:dev is for starting in development
- start:watch is for starting the typescript watcher in packages, this will call
  the package versions of start:watch
- start:reloader is for starting the reloader in development, this could be a
  package such as nodemon, ts-node-dev, node-dev

### Building

- build is for clearing past artifacts and triggering the build in each package
- build:each is for running the build script in each package
- clean is for cleaning the previous build, used by the build script.

### Testing

- test is for the test suite

### Others

- bootstrap is for lerna bootstrap
- release is for lerna release

## Package scripts

### Starting

- start:watch is for starting the typescript watcher, called by the monorepo
  script start:watch

### Building

- build is for cleaning the previous build and recompiling
- build:tsc is for triggering the compiler, used by build
- clean is for cleaning the previous build and artifacts. Used by build
