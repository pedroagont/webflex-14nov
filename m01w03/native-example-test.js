// console.log('Hi from native example!');

// TDD
// console.assert(true, 'does nothing');
// console.assert(false, 'assertion is false!');

// console.assert(2 === 2, 'does nothing');
// console.assert(2 === 4, 'assertion is false!');

const { sayHelloWithName } = require('./say-hello');

console.assert(
  sayHelloWithName('Pedr') === 'Hello there Pedro!',
  'sayHelloWithName test failed!'
);

console.log(
  'expected: ',
  'Hello there Pedro!',
  'actual: ',
  sayHelloWithName('Pedro'),
  'passed? ',
  sayHelloWithName('Pedro') === 'Hello there Pedro!'
);

console.table({
  expected: 'Hello there Pedro!',
  actual: sayHelloWithName('Pedro'),
  passed: sayHelloWithName('Pedro') === 'Hello there Pedro!',
});
