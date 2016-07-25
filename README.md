# lambda-decorator-aws-logger
AWS Lambda decorator to initialize the [aws-logger](https://github.com/blackwoodseven/aws-logger) with the environment provided by the [set-environment-decorator](https://github.com/blackwoodseven/lambda-decorator-set-environment).

## Usage
In order to use the decorator, first you need to add it to the list of dependencies:
```bash
npm install git+ssh://git@github.com:blackwoodseven/lambda-decorator-aws-logger.git#v1.0.0
```
Note that you should specify which version you need by indicating the git tag after the hash.

In order to use it, you will need to install the
 [set-environment-decorator](https://github.com/blackwoodseven/lambda-decorator-set-environment) and the [aws-logger](https://github.com/blackwoodseven/aws-logger)  (so you can actually log something).

To enable the decorator, just use it:
```js
const setEnvironment = require('lambda-decorator-set-environment');
const awsLoggerDecorator = require('lambda-decorator-aws-logger')
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
