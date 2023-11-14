class Singleton {

    constructor() {
        const intance = this.constructor.intance
        if (intance) {
            return intance
        }

        this.constructor.intance = this
    }

    foo() {
        console.log('doing something')
    }
}

let s1 = new Singleton()
let s2 = new Singleton()

console.log('are they identical? ' + (s1 === s2))
s1.foo()