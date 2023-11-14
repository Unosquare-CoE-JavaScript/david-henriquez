class ChiefExecutiveOfficer {
    get name() {
       return ChiefExecutiveOfficer._name
    }

    set name(value) {
        ChiefExecutiveOfficer._name = value
    }

    get age() {
        return ChiefExecutiveOfficer._age
    }

    set age(value) {
        ChiefExecutiveOfficer._age = value
    }

    toString() {
        return `CEO name ${this.name} and age ${this.age}`
    }
}

ChiefExecutiveOfficer._age = undefined;
ChiefExecutiveOfficer._name = undefined;


let CEO  = new ChiefExecutiveOfficer()
CEO.name = 'Chief Executive name'
CEO.age = 28

let ceo2 = new ChiefExecutiveOfficer()
ceo2.name = 'ceo 2 '
ceo2.age = 30

console.log(CEO.toString())
console.log(ceo2.toString())