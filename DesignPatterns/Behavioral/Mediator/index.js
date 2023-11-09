
class Person {
    constructor(name) {
        this.name = name;
        this.chatLog = []
    }
    receive(sender, message) {
        let s = `${sender}: ${message}`;
        this.chatLog.push(s);
        console.log(`[${this.name}] chat session: ${s}  `)
    }

    say(message) {
        this.room.broadcast(this.name, message)
    }

    pm(who, message) {
        this.room.message(this.name, who, message)
    }
}

class ChatRoom {
    constructor() {
        this.people = []
    }
    join(p) {
        let joinmsg = `${p.name} join the chat`
        this.broadcast('room', joinmsg)
        p.room = this
        this.people.push(p)
    }

    broadcast(source, message) {
        for (let p of this.people) {
            if (p.name !== source) {
                p.receive(source, message)
            }
        }
    }

    message(source, destination, message) {
        for (let p of this.people) {
            if (p.name === destination) {
                p.receive(source, message)
            }
        }
    }
}

let room = new ChatRoom()

let jhon = new Person('Jhon')
let david = new Person('David')

room.join(jhon)
room.join(david)

jhon.say('hi room')
david.say('hi')

let simon = new Person('Simon')
room.join(simon)
simon.say('q onda')

david.pm('Simon','klk')
