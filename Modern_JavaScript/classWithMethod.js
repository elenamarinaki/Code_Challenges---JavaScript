// Write a function named classWithMethod. It takes one argument: methodName. It returns a class with a method whose name comes from methodName. The method should return `this is ${methodName}`.

function classWithMethod(methodName) {
  return class {
    [methodName]() {
      return `this is ${methodName}`;
    }
  };
}

// --------------------- TESTING
const methodReturnValues = [
  new (classWithMethod('aMethod'))().aMethod(),
  new (classWithMethod('anotherMethod'))().anotherMethod(),
];
methodReturnValues;

// Goal: ['this is aMethod', 'this is anotherMethod'];
