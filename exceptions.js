let jsonString = '{"name": "John", "age": 30'; // Błąd składniowy - brakuje zamknięcia obiektu }
let parsedData;

try {
    parsedData = JSON.parse(jsonString);
} catch (err) {
    console.log("Błąd parsowania JSON:", err.name, err.message);
    console.log("Nie wolno! ", err.name, err.stack, err.message);
    console.log("Nie wolno! ");
    parsedData = {}; // Inicjalizujemy parsedData jako pusty obiekt w przypadku błędu
}

console.log(parsedData); // {}


function divide(a, b) {
    if (b === 0) {
        throw new Error("Dzielenie przez zero jest niedozwolone");
    }
    return a / b;
}

let numerek = 23;
let dzielnik = 0;
let wynik;

try {
    wynik = divide(numerek, dzielnik);
} catch (err) {
    console.log("Wystąpił błąd:", err.name, err.message);
    wynik = 0;
}

console.log(wynik); // 0