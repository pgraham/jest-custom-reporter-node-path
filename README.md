# jest-custom-reporter-node-path

This repo demonstrates behaviour with jest when attempting to use a custom
reporter in combination with a custom root path. This repository has the
following directory structure:

 - _./_ Project root. Defines an npm project.
 - _./src_ Runtime sources. Just a simple example that contains a dependency.
 - _./test_ npm subproject which contains test dependencies and specs

## Commands

 - *test:* Run the tests. This command will fail with the error:
   `Error: Could not resolve a module for a custom reporter.`
 - *test:good:* Run the tests without a custom rootDir property. This command
   succeeds but doesn't collect any coverage for runtime source in parent npm
   project
 - *test:path:* Run the tests with a work-around that adds `./node_modules` to
   `NODE_PATH`.
