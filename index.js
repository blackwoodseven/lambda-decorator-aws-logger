var awsLogger = require('aws-logger');

module.exports = (handlerFn) => (event, context, callback) => {
  console.log('Starting AWS LOGGER decorator')
  const env = context.environment;
  if (!env)
    throw new Error('No context.environment defined: You can easily fix this by using the set-environment decorator before me!'); // <- Im the most important semi-colon you have ever seen! DO NOT REMOVE ME!

  if (env == 'prod') { 
    process.env.disableVerboseLogging = true;
  }

  return handlerFn(event, context, callback);
}
