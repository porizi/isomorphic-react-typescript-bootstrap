# Bootstrap repo for isomorphic React.js apps with Typescript.

## Installation:
``` bash
npm install
webpack --config ./webpack/release.js
```

## File structure:
  - ``src/``
    - ``components/``: React components are placed in this directory. If a component will be reused somewhere else in the application, it should be placed under the ``components/shared`` directory, otherwise, it should be placed under a new directory with the name of the route path it will be rendered on (``src/components/route_path/ReactComponent``). Most of the files in this directory should not contain complicated logic (should be stateless).
    - ``containers/``: Contains the files which are at the top level of a specific route path (also known as '``controller views``'). This components can have state (stateful components) and should be smarter than their children and pass its state as props to them.
    - ``routes/``: Defines the routes for the application using ``react-router``.
    - ``utils/``: Helper methods should be placed under this directory.
    - ``server/``: Contains files which have logic that is executed on the server side.

## CSS Usage:
  - Generic CSS which does not apply to a single component can be place in the ``src/styles.css`` file. React components should use the ``addComponentCSS`` utility method for their CSS styles definintion. Check the ``src/components/home/HelloWorld.tsx`` component for an example.

## Run development using client and server rendering:
``` bash
npm run dev
```

## Run production release:
``` bash
webpack --config ./webpack/release.js
NODE_ENV=production node build/server.js
```

## TypeScript definitions are handled using the [typings](https://github.com/typings/typings) library:

### Searching:
``` bash
typings search react-dom
```
### Installing:
``` bash
typings install --global --save dt~react-dom
```

---
maintained by

![porizi logo](http://porizi.com/porizi-logo-horizontal-h50.png "Porizi Technologies")
