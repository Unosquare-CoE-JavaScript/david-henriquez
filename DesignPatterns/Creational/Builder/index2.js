class Person {
    constructor() {
        this.streetAddress = this.postcode = this.city = ''

        this.companyName = this.position = ''
        this.anualIncome = 0
    }

    toString() {
        return `Person lives at ${this.streetAddress}, ${this.city}
         ${this.postcode} \n and works at ${this.companyName} earning ${this.anualIncome}
        `
    }
}

class PersonBuilder {
    constructor(person = new Person()){
        this.person = person
    }

    get lives(){
        return new PersonAddressBuilder(this.person)
    }

    get works(){
        return new PersonJobBuilder(this.person)
    }

    build (){
        return this.person
    }
}

class PersonJobBuilder extends PersonBuilder{
    constructor(person){
        super(person)
    }

    at(companyName){
        this.person.companyName = companyName
        return this
    }

    asA(position){
        this.person.position = position
        return this
    }

    earning(annualIncome){
        this.person.anualIncome = annualIncome
        return this
    }
}

class PersonAddressBuilder extends PersonBuilder{
    constructor(person){
        super(person)
    }

    at(streetAddress){
        this.person.streetAddress = streetAddress
        return this
    }

    withPostalCode(postcode){
        this.person.postcode = postcode
        return this
    }

    in(city){
        this.person.city = city
        return this
    }
}


let pb = new PersonBuilder()
let person =
 pb.lives.at('fake 123').in('springfield').withPostalCode('123')
 .works.at('Acme').asA('Engineers').earning(8000000)
 .build()

 console.log(person)



