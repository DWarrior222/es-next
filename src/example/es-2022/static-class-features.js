/**
 * Static public fields
 * Static private methods
 * Static private fields
 */


class StaticClassFeatures {
  static staticField = 'staticField';

  static callPrivateMethods() {
    StaticClassFeatures.#privateMethods();
  }

  static logPrivateField() {
    console.log(StaticClassFeatures.#privateField);
  }

  static #privateMethods() {
    console.log('privateMethods');
  }

  static #privateField = 'privateField';
}

console.log(StaticClassFeatures.staticField);
StaticClassFeatures.logPrivateField()
StaticClassFeatures.callPrivateMethods();