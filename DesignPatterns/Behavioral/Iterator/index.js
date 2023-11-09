class Creature {
    constructor() {
        this.stats = new Array(3).fill(10)
    }

    get strength() {
        return this.stats[0]
    }
    set strength(value) {
        this.stats[0] = value
    }

    get agility() {
        return this.stats[1]
    }
    set agility(value) {
        this.stats[1] = value
    }

    get inteligence() {
        return this.stats[2]
    }
    set inteligence(value) {
        this.stats[2] = value
    }

    get SumOfStats() {
        return this.stats.reduce((x, y) => x + y, 0)
    }

    get averageStats() {
        return this.SumOfStats / this.stats.length
    }

}

let newCreature = new Creature()
newCreature.str = 10
newCreature.agi = 11
newCreature.int = 12
console.log(newCreature)