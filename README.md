# aws-logger-decorator
AWS Lambda decorator to initialize the [aws-logger](https://github.com/blackwoodseven/aws-logger) with the environment provided by the [set-environment-decorator](https://github.com/blackwoodseven/set-environment-decorator).

## Usage
In order to use the decorator, first you need to add it to the list of dependencies:
```bash
npm install git+ssh://git@github.com:blackwoodseven/set-environment-decorator.git#v1.0.0
```
In order to use, you will need to install the
 [set-environment-decorator](https://github.com/blackwoodseven/set-environment-decorator) and the [aws-logger](https://github.com/blackwoodseven/aws-logger)  (so you can actually log something).

To enable the decorator, just use it:
```js
const setEnvironmentDecorator = require('set-environment-decorator');
const awsLoggerDecorator = require('aws-logger-decorator')
const handler = require('./handler')

/*
  Be aware that the awsLoggerDecorator should decorate the handler
  after context has been decorated by the setEnvironmentDecorator
*/
exports.handler =
  setEnvironmentDecorator(
    awsLoggerDecorator(
      handler
    )
  )
```
