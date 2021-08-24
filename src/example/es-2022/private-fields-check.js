// https://github.com/tc39/proposal-private-fields-in-in

class C {
  #brand = 'CCCCC';

  static isC(obj) {
    console.log('isC', obj.#brand);
  }
}

// C.isC(new C);
// C.isC({})


class D {
  #brand = 'DDDDDD';

  static isD(obj) {
    return #brand in obj && obj.#brand;
  }
}

console.log(D.isD({}))
console.log(D.isD(new D))
