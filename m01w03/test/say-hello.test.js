// const assert = require('assert');
const assert = require('chai').assert;
const { sayHello, sayHelloWithName } = require('../say-hello');

describe('sayHello', function () {
  describe('#sayHello()', function () {
    it('should return Hello there!', function () {
      const actual = sayHello();
      const expected = 'Hello there!';
      assert.equal(actual, expected);
    });
  });
  describe('#sayHelloWithName()', function () {
    it('should return Hello there Pedro! when including a name argument like Pedro', function () {
      const actual = sayHelloWithName('Pedro');
      const expected = 'Hello there Pedro!';
      assert.equal(actual, expected);
    });
  });
});
