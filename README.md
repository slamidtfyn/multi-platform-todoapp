# Multi platform TODO app
This TODO app is based on different server and clientside technologies to show the different ways to implements a webapplication 

Layout of the TODO app is based on the material design components found here: https://material.io/components/

## Run TODO app
To run the different apps Docker and Docker Compose must be installed on the environment.

* Docker: https://docs.docker.com/install/
* Docker Compose: https://docs.docker.com/compose/install/

## Client side
Each project must be able to pass the tests defined in ./cypress/integration/todo_app_spec.js

For each project a npm run command is defined to run the tests

### plain-js
Simple HTML page with inline js that are able to add/remove todo items

Run tests: `npm run test:plain-js`

### [jQuery](https://jquery.com/)
plain-js converted into using jQuery instead of the native javascript



### Planned implementations
* [Handlebars.js](http://handlebarsjs.com/)
* [Emberjs](https://emberjs.com/)
* [Angularjs](https://angularjs.org/)
* [Angular](https://angular.io/)
* [React](https://reactjs.org/)
* [Vue.js](https://vuejs.org/)
* [Aurelia](http://aurelia.io/)

## Server side
### Planned implementations
* asp.net core
* PHP
* Node.js
* Python
* F#
* Ruby