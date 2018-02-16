# multi-platform-todoapp
TODO app based on different server and clientside technologies

The repository consists of different projects that all implements the same todo-app

To run the different apps Docker and Docker Compose must be installed on the environment.

* Docker: https://docs.docker.com/install/
* Docker Compose: https://docs.docker.com/compose/install/


## Tests
Each project must be able to pass the tests defined in ./cypress/integration/todo_app_spec.js

For each project a npm run command is defined to run the tests

## Projects

### plain-js
Simple HTML page with inline js that are able to add/remove todo items

Run app:  `npm run run:plain-js`
Test app: `npm run test:plain-js`
Stop app: `npm run stop`