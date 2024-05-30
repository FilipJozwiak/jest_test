// Zadania dotyczące prototypów:
// Tworzenie Prototypu:
// Utwórz prototyp Person, który będzie miał właściwości name i age. Dodaj metodę greet, która wypisze "Cześć, mam na imię [name] i mam [age] lat".

function Person(name, age) {
    this.name = name;
    this.age = age;
};

Person.prototype.greet = function () {
    console.log(`Cześć, mam na imię ${this.name} i mam ${this.age} lat.`);
};

// Dodawanie Metody do Prototypu:
// Dodaj metodę celebrateBirthday do prototypu Person, która zwiększy wartość age o 1.

Person.prototype.celebrateBirthday = function () {
    this.age += 1;
}

// Dziedziczenie Prototypów:
// Utwórz prototyp Employee, który dziedziczy po Person i dodaje właściwość jobTitle. Dodaj metodę work, która wypisze "[name] pracuje jako [jobTitle]".

function Employee(name, age, jobTitle) {
    // Wywołaj konstruktor Person
    Person.call(this, name, age);
    this.jobTitle = jobTitle;
}

Object.setPrototypeOf(Employee.prototype, Person.prototype);

Employee.prototype.work = function () {
    console.log(`${this.name} pracuje jako ${this.jobTitle}`);
};


// Sprawdzanie Własności Prototypu:
// Napisz funkcję, która sprawdzi, czy dany obiekt posiada określoną właściwość bezpośrednio, a nie przez prototyp.

Employee.prototype.hasProperty = function (property_name) {
    console.log(`Czy ${this.name} ma swoją właściwość ${property_name}: ${this.hasOwnProperty(property_name)}`);
}

// Prototypy Obiektów:
// Utwórz prototyp Car, który będzie miał właściwości make i model. Dodaj metodę describe, która wypisze "To jest [make] [model]".

function Car(make, model) {
    this.make = make;
    this.model = model;
    this.describe = function () {
        console.log(`To jest ${this.make} ${this.model}.`)
    }
}

// Modyfikowanie Prototypu:
// Dodaj do prototypu Array metodę first, która zwróci pierwszy element tablicy.

Array.prototype.first = function () {
    return this[0][0];
}

// Prototypy Funkcji:
// Napisz funkcję, która utworzy prototyp Rectangle z właściwościami width i height oraz metodą area, która zwróci pole prostokąta.

function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}

// Prototypy i Zasięg:
// Utwórz prototyp Counter, który będzie miał właściwość count oraz metody increment i decrement.

function Counter(value) {
    this.value = 0;

    this.increment = function () {
        this.value += 1;
    }

    this.decrement = function () {
        this.value -= 1;
    }
}

// Prototypy i Tablice:
// Dodaj metodę last do prototypu Array, która zwróci ostatni element tablicy.

filip = new Person("Filip", 36);
filip.celebrateBirthday();
filip.greet();
janek = new Employee("Janek", 12, "Sprzątacz");
// console.log(janek.name);
janek.greet();
janek.celebrateBirthday();
janek.work();
janek.hasProperty('name');
janek.hasProperty('greet');

samochod = new Car(2012, 'Audi');
samochod.describe();

// tablica = new Array([1, 2, 3, 4]);
// console.log(tablica);
// console.log(tablica.first());

licznik = new Counter(1);
licznik.increment();
licznik.increment();
licznik.increment();
licznik.increment();
console.log(licznik.value)
licznik.decrement();
licznik.decrement();
licznik.decrement();
licznik.decrement();
licznik.decrement();
licznik.decrement();
console.log(licznik.value);