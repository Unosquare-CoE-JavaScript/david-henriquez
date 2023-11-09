class Address {
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        
        this.country = country;
    }
    deepCopy() {
        return new Address(this.street, this.city, this.country);
    }
}

class Person {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    deepCopy() {
        return new Person(this.name, this.address.deepCopy());
    }
}

let jhon = new Person('jhon', new Address('afk', 'barranquilla', 'colombia'))
// let jane = new Person().deepCopy()
let jane = { ...jhon, name: 'jane', address: { ...jhon.address, city: 'medellin' } }
console.log(jhon)
console.log(jane)