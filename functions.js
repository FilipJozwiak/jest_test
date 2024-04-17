// Napisz funkcję, która zwraca sumę dwóch liczb.
function sum(a, b) {
    return a + b;
}

// Napisz funkcję, która zwraca największą liczbę z podanej tablicy.
function largestElement(tab) {
    let max = tab[0];
    tab.forEach(element => {
        if (element > max) {
            max = element;
        }
    });
    return max;
}

// Napisz funkcję, która usuwa duplikaty z tablicy.
function removeDuplicats(tab) {
    let set = new Set();
    tab.forEach(element => {
        set.add(element);
    })
    return Array.from(set);
}

// Napisz funkcję, która zamienia wszystkie litery w ciągu znaków na wielkie litery.
function toUpper(text) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        result += text.charAt(i).toUpperCase();
    }
    return result;
}

// Napisz funkcję, która zwraca średnią arytmetyczną elementów w tablicy liczb.
function meanValue(tab) {
    let _sum = 0;
    let _items = 0;
    tab.forEach(element => {
        _sum += element;
        _items++;
    })
    if (_items == 0) {
        return 0;
    } else {
        return _sum / _items;
    }
}

// Napisz funkcję, która sprawdza, czy dany ciąg znaków jest palindromem.
function isPalindrome(text) {
    for (let i = 0; i < text.length / 2 - 1; i++) {
        if (text.charAt(i) != text.charAt(text.length - 1 - i)) {
            return false;
        }
    }
    return true;
}

// Napisz funkcję, która zwraca n-ty element ciągu Fibonacciego.
function fibonacci(n) {
    if (n < 2) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Napisz funkcję, która sprawdza, czy podana liczba jest liczbą pierwszą.
function isPrime(a) {
    if (a < 4 && a > 0) {
        return true;
    } else if (a <= 0) {
        return false;
    }
    for (let i = 2; i < a; i++) {
        if (a % i == 0) {
            return false;
        }
    }
    return true;
}

// Napisz funkcję, która zamienia liczbę dziesiętną na system binarny.
function toBinary(a) {
    if (a == 1) {
        return "1";
    }
    let signs = []
    while (a > 0) {
        let res = a / 2;
        if (res % 1 != 0) {
            signs.push("1");
            a = Math.floor(res);
        } else {
            signs.push("0");
            a = res;
        }
    }
    text = ""
    for (let i = signs.length - 1; i >= 0; i--) {
        text += signs[i]
    }
    return text;
}

// Napisz funkcję, która odwraca kolejność liter w podanym ciągu znaków.
function invertText(text) {
    let result = "";
    for (let i = text.length - 1; i >= 0; i--) {
        result += text.charAt(i);
    }
    return result;
}

// Napisz funkcję, która sprawdza, czy dwa obiekty są identyczne.
function identical(a, b) {
    return a === b;
}

// Napisz funkcję, która zlicza liczbę wystąpień danej litery w ciągu znaków.
function countLetter(text, letter) {
    let result = 0;
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) == letter) {
            result++;
        }
    }
    return result;
}

// Napisz funkcję, która usuwa wszystkie białe znaki z podanego ciągu znaków.
function removeWhitespaces(text) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) != " ") {
            result += text.charAt(i);
        }
    }
    return result;
}

// Napisz funkcję, która usuwa wszystkie elementy z tablicy o podanej wartości.
function removeValue(tab, number) {
    let arr = [];
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] != number) {
            arr.push(tab[i]);
        }
    }
    return arr;
}

// Napisz funkcję, która zwraca losowy element z podanej tablicy.
function randomItem(tab) {
    let index = Math.floor(Math.random() * (tab.length));
    return tab[index];
}

// Napisz funkcję, która konwertuje temperaturę z Celsiusza na Fahrenheit.
function CelsiusToFahrenheit(c_degrees) {
    return c_degrees * 9 / 5 + 32;
}

// Napisz funkcję, która zwraca datę dzisiejszą w formacie "RRRR-MM-DD". Bez testów.
function TodayString() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    return year + "-" + month + "-" + day;
}

// Napisz funkcję, która zwraca indeks pierwszego wystąpienia danego elementu w tablicy.
function indexOfItem(tab, element) {
    let arr = [];
    return tab.indexOf(element);
}

// Napisz funkcję, która generuje losowy ciąg znaków o podanej długości.
function randomText(num) {
    let res = "";
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < num; i++) {
        res += characters.charAt(Math.floor(Math.random() * characters.length - 1));
    }
    return res;
}

// Napisz funkcję, która zwraca tablicę unikalnych elementów z podanej tablicy
function onlyUniqe(tab) {
    let arr = [];
    for (let i = 0; i < tab.length; i++) {
        let item = tab[i];
        let _sum = 0;
        for (let j = 0; j < tab.length; j++) {
            if (tab[j] == item) {
                _sum++;
            }
        }
        if (_sum == 1) {
            arr.push(item);
        }
    }
    return arr;
}

// Napisz funkcję, która zwraca podaną wartość długość w metrach na mile
function metersToMiles(meters) {
    return meters / 1608;
}

// Zapisz algorytm, który z trzech danych liczb całkowitych wybiera wartość największą.
function maxNumber(a, b, c) {
    let _max = a;
    if (b > a) {
        _max = b;
    }
    if (c > _max) {
        _max = c;
    }
    return _max;
}

// Zapisać algorytm, który sprawdza, czy podane trzy wartości mogą być długościami boków trójkąta
function canBeTriangle(a, b, c) {
    let _max = a;
    let _max_a = true;
    let _max_b = false;
    let _max_c = false;
    if (b > _max) {
        _max = b;
        _max_a = false;
        _max_b = true;
    }
    if (c > _max) {
        _max = c;
        _max_a = false;
        _max_b = false;
        _max_c = true;
    }
    if (_max_a) {
        return b + c > a;
    } else if (_max_b) {
        return a + c > b;
    } else if (_max_c) {
        return a + b > c;
    }
}

// Zapisz algorytm obliczający wartość funkcji skoku jednostkowego, określoną następująco : f(x, p) -> 1 dla x > p, 0 dla x <= p
function UnitStep(x, p) {
    if (x > p) {
        return 1;
    } else if (x <= p) {
        return 0;
    }
}

// Zapisz algorytm sprawdzający czy dana liczba całkowita n>=2 jest liczbą parzystą
function isEven(n){
    if (n % 2 == 0){
        return true;
    } else{
        return false;
    }
}

// Sprawdzić, czy wczytana liczba całkowita n>1 jest liczbą pierwszą
function isPrime2(n) {
    let prime = true;
    for (let i = n - 1; i >= 2; i--) {
        if (n % i == 0) {
            return false;
        }
    }
    return prime;
}

function BubbleSort(tab) {
    let sorted = true
    for (let i = 0; i < tab.length; i++) {
        for (let j = 0; j < tab.length - 1; j++) {
            if (tab[j] > tab[j + 1]) {
                let _temp = tab[j];
                tab[j] = tab[j + 1];
                tab[j + 1] = _temp;
                sorted = false;
            }
        }
        if (sorted) {
            return;
        }
    }
}

function InsertSort(tab) {
    for (let i = 1; i < tab.length; i++) {
        let key = tab[i];
        let j = i - 1;

        while (j >= 0 && tab[j] > key) {
            tab[j + 1] = tab[j];
            j = j - 1;
        }
        tab[j + 1] = key;
    }
}

function SelectionSort(tab) {
    const len = tab.length;
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (tab[j] < tab[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = tab[i];
            tab[i] = tab[minIndex];
            tab[minIndex] = temp;
        }
    }
}

module.exports = { sum, largestElement, removeDuplicats, toUpper, meanValue, isPalindrome, fibonacci, isPrime, toBinary, invertText, identical, countLetter, removeWhitespaces, removeValue, randomItem, CelsiusToFahrenheit, indexOfItem, onlyUniqe, metersToMiles, maxNumber, canBeTriangle, UnitStep, isEven, isPrime2, BubbleSort, InsertSort, SelectionSort };
