# Design patters are common architectural approaches and are used accross many different languages

## Solid Principles

### Single Responsability

A class should have a single responsability and as consequence it should only have one reason to change

### Open-Close principles

a class or object or method shoould be open to extension and close for modification than could have breaking changes

### Liskov Substitutions

if you have some method , it should also equually able to take a derived type,
other words objects of a superclass shall be replaceable with objects of its subclasses without breaking the application

### Interface Segregations

you have to segregate or split up interfaces into differents parts so that peoploe don't implement more than what they need

### Dependency Inversion

Define a relationship that you should have between low level modules and high level modules
other words
High level modules should not directly depend on low level modules, they should depend on abstractions

## Design Patterns are divided in 3 types

-Creational

Deal with the creation (constructions) of objects

1. Builder
   component which provides an api for costruct or build and object step by step
2. Factory
   a component responsible solely for the wholesale (not piecewise) creation of objects
3. Abstract Factory
   is the same than Factory, but using abstract classes instead of normal ones
4. Prototype
   we create a prototype for create clones which we can use for create new objects based in the prototype
   other words a partially or fully initialized object that you copy and make use of
5. Singleton
   is user for compoent that only makes sense to have one in the system
   in other words, is a component which is instatiend only once

-Structural

Concern with the strucrure (e.g class members)

1. Adapter
   try to apadt an interface to another one
2. Brigde
   connect diferents componets together through abstractions
3. Composite
   help us to use the same api for an Array of objects or and object in singular, in other words, is a mechanis for treating individual object and a set of objects in a uniform manner,
   its usefull for groupynd data or objects
4. Decorator
   Add behavior without altering the class itself
   facilitate the adding of functionality to objects without inheritance
5. Facade
   Provides a simple, easy to understand user interface over a large and sophisticated body of code

-Behavioral

1. Chain of responsibility
   Sequence of handlers proccessing an event one after another, example of games of cards with attackt and deffense, like yu gi oh,
2. Command
   an object which represents an instruction to perform a particual action, contains all the information necceasry for the action to be taken
   look like is very useful for "transactional proccess" because you can roll back the commands
3. interpreter
   componet that proccesses structured text data. Does so by turnit it into separate lexical tokens(lexing), and then interpreting sequecnes of said tokens (parsing)
4. iterator
   an object that facilitates the traversal of a data structure
5. mediator
   facilitates communication between components
   a componnet that facilitates communication between other components Wwithout them necesarry being aware of each other having direct reference or access to each other
6. memento
   a token or handle class for representing the system in at particular point of time, let us rolling back when the token was generated
7. observer
   is an object that wishes to be informed about events happening in the system. the entity generating the events is an observable
8. State
   a pattern in which the object's behavior is determined by its state, changing from one state to another shoudl be triggered by something
9. Strategy
   enables the exact behavior of a system to be selected at run time
10. Template Method
11. Visitor

### Notes

Abstract: classes than never should be instantiated, you have to instantiate a subclass from this

Static: Class or method that doesn´t need to be instanciate it for use it, for example
`let p = Point.newCartesianPoint(4,5)`
where Point is a class
