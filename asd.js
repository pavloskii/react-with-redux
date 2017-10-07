//   "scripts": {
//     "prestart": "babel-node tools/startMessage.js",
//     "start": "npm-run-all --parallel test:watch open:src lint:watch",
//     "open:src": "babel-node tools/srcServer.js",
//     "lint": "node_modules/.bin/esw webpack.config.* src tools",
//     "lint:watch": "npm run lint -- --watch",
//     "test": "mocha --reporter progress tools/testSetup.js \"src/**/*.test.js\"",
//     "test:watch": "npm run test -- --watch"
//   },