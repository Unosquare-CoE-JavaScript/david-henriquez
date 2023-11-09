class SingleValue {
    constructor(number) {
      this.number = number;
    }
  
    getValue() {
      return this.number;
    }
  }
  
  class ManyValues {
    constructor() {
      this.numbers = [];
    }
  
    push(number) {
      this.numbers.push(number);
    }
  
    getValue() {
      return this.numbers;
    }
  }
  
  function sum(valueObjects) {
    let sum = 0;
    valueObjects.forEach((valueObject) => {
      const value = valueObject.getValue();
  
      if (value.length) {
        value.forEach((number) => {
          sum += number;
        });
      } else {
        sum += value;
      }
    });
  
    return sum;
  }
  