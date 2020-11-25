# deftr

Server-side code for the Deftr project

## The Stack

### Frontend

- React
- Redux
- FluentUI

## Documentation

### UML Documentation

Please refer to docs folder

### Conventions

Please refer to [scripts.md](scripts.md) for the scripts naming and behavior
conventions.

### Documentation

Automatic documentation can be created with the command `yarn doc`. This will
use typedoc to create the documentation under `./docs`.

### The Reloader

This project watches js files by `nodemon` rather than watching ts using ts node
or more efficient solutions such as `ts-node-dev`. The reason for this is the
use of `tsc -w` and then watching the js files in the packages has proven to be
quite a workable solution for a monorepo.
