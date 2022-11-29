const assert = require('assert');
const { sayHello, sayHelloWithName } = require('./say-hello');

assert.equal(sayHello(), 'Hello there!');
assert.equal(sayHelloWithName('Pedro'), 'Hello there Pedro!');
