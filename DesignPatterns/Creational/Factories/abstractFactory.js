const readline = require('readline');
let rl = readline.createInterface({ input: process.stdin, output: process.stdout });

class HotDrink {
    consume() {
    }
}

class Tea extends HotDrink {
    consume() {
        console.log('this tea is nice with lemon')
    }
}

class Coffe extends HotDrink {
    consume() {
        console.log('this coffe is delcius')
    }
}

class HotDrinkFactory {
    prepare(amount) {

    }
}

class TeaFactory extends HotDrinkFactory {
    prepare(amount) {
        console.log(`Put in tea bag pour ${amount}ml`)
        return new Tea()
    }
}

class CoffeFactory extends HotDrinkFactory {
    prepare(amount) {
        console.log(`Grind some beans, etc for  ${amount}ml`)
        return new Coffe()
    }
}

const availableDrink = Object.freeze({
    coffe: CoffeFactory,
    tea: TeaFactory,
})

class HotDrinkMachine {

    constructor() {
        this.factories = {}
        for (let drink in availableDrink) {
            this.factories[drink] = new availableDrink[drink]()
        }
    }

    interact(consumer){
        rl.question('Please specify drink and amount: ',(answer)=>{
            let parts = answer.split(' ')
            let name = parts[0]
            let amount = parseInt(parts[1])
            let d = this.factories[name].prepare(amount)
            consumer(d)
            rl.close()
        })
    }

    makeDrink(type) {
        switch (type) {
            case 'tea':
                return new TeaFactory().prepare(200)
            case 'coffe':
                return new CoffeFactory().prepare(50)
            default:
                throw new Error('')
        }
    }
}

let machine = new HotDrinkMachine()
// rl.question('Which Drink ', (answer) => {
//     let drink = machine.makeDrink(answer)
//     drink.consume()
//     rl.close()
// })
machine.interact((drink)=>{
    drink.consume()
})