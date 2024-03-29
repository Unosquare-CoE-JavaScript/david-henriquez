const fs  = require('fs');

class Journal {

    constructor() {
        this.entries = {}
    }

    addEntry(text) {
        let c = ++Journal.count
        let entry = `${c}: ${text}`
        this.entries[c] = entry
        return c
    }

    removeEntry(index) {
        delete this.entries[index]
    }

    toString() {
        return Object.values(this.entries).join('\n')
    }

    // save(filename) {
    //     fs.writeFileSync(filename, this.toString(), 'utf8')
    // }

    // load(filename) {
    //     //
    // }
}

class PersistentManager {

    preprocess(j) {
        //
    }

    saveToFile(journal, filename) {
        fs.writeFileSync(filename, journal.toString(), 'utf8')
    }
}


Journal.count = 0

let j = new Journal()
j.addEntry('Journal 1')
j.addEntry('Journal 2')
console.log(j.toString())

let p = new PersistentManager();
let filename=(__dirname+'/journal.txt');
p.saveToFile(j, filename)
