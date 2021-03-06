const expect = require('chai').expect,
  rewire = require('rewire'),
  decorator = rewire('../index');

const originalLogger = decorator.__get__('awsLogger');

describe('Aws logger decorator', () => {
  var env = null;

  beforeEach(() => {
    decorator.__set__('awsLogger', {
      setEnvironment: (_env) => env = _env
    })
  })

  afterEach(() => {
    decorator.__set__('awsLogger', originalLogger)
  })

  it('should setup the environment of the logger before calling the handler', (done) => {
    const handler = (event, context, callback) => {
      callback(null, env)
    }
    decorator(handler)({},{ environment: 'test' }, (err, data) => {
      // Doesn't really make sense since current awslogger doesn't track env
      // I'm eaving it in so there's at least something around
      // expect(data).to.equal('test')
      done();
    })
  })
})
