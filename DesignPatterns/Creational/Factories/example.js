class Person
{
    constructor(id, name)
    {
        this.id = id
        this.name = name
    }
}

class PersonFactory
{
    constructor()
    {
        this.id = 0    
    }
    
    createPerson(name)
    {
        let newPerson = new Person(this.id, name);
        this.id++
        return newPerson;
    }
}