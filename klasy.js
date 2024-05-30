// Tworzenie Klasy:
// Napisz klasę Person z właściwościami name i age oraz metodą greet, która wypisze "Cześć, mam na imię [name] i mam [age] lat".

// Metody Statyczne:
// Dodaj metodę statyczną compareAge do klasy Person, która porówna wiek dwóch obiektów Person i zwróci starszą osobę.

// Kopiowanie Obiektów:
// Napisz metodę w klasie Person, która zwróci kopię obiektu Person.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Cześć, mam na imię ${this.name} i mam ${this.age} lat.`)
    }

    static compareAge(person1, person2) {
        return person1.age > person2.age ? person1 : person2;
    }

    copy(){
        return new Person(this.name, this.age);
    }
}

// Dziedziczenie Klas:
// Utwórz klasę Employee, która dziedziczy po Person i dodaje właściwość jobTitle oraz metodę work, która wypisze "[name] pracuje jako [jobTitle]".

class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age);
        this.jobTitle = jobTitle;
    }

    work() {
        console.log(`${this.name} pracuje jako ${this.jobTitle}.`)
    }


}

// Konstruktory w Klasach:
// Napisz klasę Car z konstruktorem przyjmującym make i model oraz metodą describe, która wypisze "To jest [make] [model]".

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    describe() {
        console.log(`To jest ${this.make} ${this.model}.`);
    }
}


// Właściwości Statyczne:
// Utwórz klasę Counter z właściwością statyczną count oraz metodami increment i decrement.

class Counter {
    static count = 0;

    static increment() {
        Counter.count += 1;
    };

    static decrement() {
        Counter.count -= 1;
    }
};

// Gettery i Settery:
// Napisz klasę Rectangle z właściwościami width i height oraz getterem area, który zwróci pole prostokąta.

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.width * this.height;
    }
}

// Metody Przeciążone:
// Utwórz klasę Animal z metodą speak. Utwórz klasy Dog i Cat, które dziedziczą po Animal i przeciążają metodę speak, aby wypisywały odpowiednio "Woof" i "Meow".

class Animal{
    speak(){

    }
}

class Dog extends Animal{
    speak(){
        console.log("Woof!");
    }
}

class Cat extends Animal{
    speak(){
        console.log("Meow!");
    }
}

// Przesłanianie Metod:
// Napisz klasę Shape z metodą area. Utwórz klasy Circle i Square, które dziedziczą po Shape i przesłaniają metodę area.

class Shape{
    get area(){
        return 0;
    }
}

class Circle extends Shape{
    constructor(radius){
        super();
        this.radius = radius;
    }
    get area(){
        return Math.pow(this.radius, 2) * Math.PI;
    }
}

class Square extends Shape{
    constructor(a){
        super();
        this.a = a;
    }
    get area(){
        return Math.pow(this.a, 2);
    }
}

// Porównywanie Obiektów:
// Utwórz klasę Book z właściwościami title i author. Napisz metodę isEqual, która porówna dwa obiekty Book.

class Book{
    constructor(title, author){
        this.title = title;
        this.author = author;
    }

    isEqual(book){
        return this.author === book.author && this.title === book.title;
    }
}

// Złożoność Klas:
// Utwórz klasę Library, która zawiera tablicę obiektów Book. Dodaj metody addBook i removeBook.

// Iteratory i Generatory:
// Dodaj do klasy Library metodę getBooks, która zwróci iterator po książkach w bibliotece.


class Library{
    constructor(){
        this.books = [];
    }
    addBook(book){
        this.books.push(book);
    }
    removeBook(book) {
        this.books = this.books.filter(b => !b.isEqual(book));
    }

    *getBooks() {
        for (let book of this.books) {
            yield book;
        }
    }

}

// Singleton Pattern:
// Utwórz klasę Singleton, która zapewnia, że może istnieć tylko jedna instancja tej klasy.

class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this;
    }
}

// Implementacja Interfejsu:
// Napisz klasę Queue, która implementuje metody enqueue (dodaje element na koniec kolejki) i dequeue (usuwa element z początku kolejki).

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        return this.items.shift();
    }
}

let p = new Person("Janek", 15);
// p.greet();
let p2 = new Employee("Jasiu", 24, "Pomywacz");
// p2.greet();
// p2.work();

console.log(Person.compareAge(p, p2));

let c = new Car(1999, "Volvo");
c.describe();

console.log(Counter.count);

Counter.increment();
Counter.increment();
console.log(Counter.count);
Counter.decrement();
console.log(Counter.count)

c = new Cat();
d = new Dog();
c.speak();
d.speak();

let circle = new Circle(12);
let square = new Square(12);
console.log(circle.area, square.area);

let book1 = new Book("Tolkien", "LOTR");
let book2 = new Book("Tolkien", "LOTR");
console.log(book1.isEqual(book2));