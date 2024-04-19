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
function isEven(n) {
    if (n % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

// Napisac program sprawdzajacy czy podana liczba jest podzielna przez 3,4 oraz 12. Dla przykladu 12 powinno zwrocic prawde, 24 powinno zwrocic prawde, 120 tez. 66 powinno zwrocic falsz.
function isDivibleBy12(n) {
    return (n % 12 == 0);
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

// Algorytm wczytuje z wejścia kolejne liczby całkowite dodatnie. Wczytywanie liczb kończy się po wczytaniu sygnału 0 (zero). Zapisz algorytm, który sprawdza on-line, czy w tym ciągu wystąpiły liczby przekraczające zadaną wartość p
//Modyfikacja - lista z wejściowa założenia będzie kończyła się wartością 0
function analyzeInput(list, p) {
    let _occured = false;
    list.forEach(element => {
        if (element > p) {
            _occured = true;
        }
    })
    return _occured;
}

// Ile liczb w ciągu liczb dodatnich (ciąg kończy się odczytem 0) przekracza określoną wartość p?
function analyzeInput2(list, p) {
    let _occured_count = 0;
    list.forEach(element => {
        if (element > p) {
            _occured_count++;
        }
    })
    return _occured_count;
}

// Znaleźć wartość minimalną w ciągu liczb dodatnich zakończonym wczytaniem 0
function analyzeInput3(list) {
    if (list.length == 0) {
        return -1;
    } else {
        let _min = list[0];
        list.forEach(element => {
            if (element < _min & element != 0) {
                _min = element;
            }
        })
        return _min;
    }
}

// Zapisać iteracyjny algorytm obliczający wartość n! dla zadanej wartości n
function factorialIter(n) {
    let _res = 1;
    for (let i = n; i > 0; i--) {
        _res = _res * i;
    }
    return _res;
}

// Zapisać iteracyjny algorytm znajdujący n - ty wyraz ciągu Fibonacciego
function fibonacciIter(n) {
    if (n <= 1) {
        return n;
    } else {
        let a = 1;
        let b = 1;
        for (let i = 2; i <= n; i++) {
            let temp = b;
            b = a + b;
            a = temp;
        }
        return b;
    }
}

// Zapisać iteracyjny algorytm obliczający sumę ciągu
function iterSum(n, eps) {
    let _res = 0;
    let _prev = 0;
    for (let i = 1; i <= n; i++) {
        _res += 1 / (i * (i + 1));
        if (Math.abs(_res - _prev) <= eps) {
            return _res;
        }
        _prev = _res;
    }
    return _res;
}

// Zapisz algorytm, który znajdzie w zdefiniowanej tablicy jednowymiarowej element największy oraz indeks jego ostatniego wystąpienia.
function checkList(tab) {
    if (tab.length == 0) {
        return [-1, -1];
    } else {
        let _max = tab[0];
        let _index = 0;
        for (let i = 0; i < tab.length; i++) {
            if (tab[i] > _max) {
                _max = tab[i];
                _index = i;
            }
        }
        return [_max, _index];
    }
}

// Zapisz algorytm, który odwróci kolejność elementów w zdefiniowanej tablicy jednowymiarowej.
function invertList(tab) {
    for (let i = 0; i < tab.length / 2; i++) {
        let temp = tab[i];
        tab[i] = tab[tab.length - 1 - i];
        tab[tab.length - 1 - i] = temp;
    }
    return tab;
}

// Zapisz algorytm, który obliczy ilość elementów w zdefiniowanej tablicy jednowymiarowej podzielnych przez x (x jest argumentem funkcji)
function countList(tab, x) {
    let sum = 0;
    tab.forEach(element => {
        if (element % x == 0) {
            sum++;
        }
    })
    return sum;
}

// Zapisz algorytm, który przeanalizuje dwie zdefiniowane tablice jednowymiarowe(o tym samym rozmiarze) i wyświetli indeks oraz wartość jeżeli w obydwu tych tablicach elementy pod danym indeksem są takie same
function compareLists(tab1, tab2) {
    if (tab1.length != tab2.length) {
        return -1;
    } else if (tab1 == [] | tab2 == []) {
        return - 1;
    } else {
        for (let i = 0; i < tab1.length; i++) {
            if (tab1[i] == tab2[i]) {
                return [i, tab1[i]];
            }
        }
    }
    return -1;
}

// Zapisz algorytm, który w zdefiniowanej tablicy jednowymiarowej zamieni miejscami elementy o indeksach x i y (x i y są argumentami funkcji).
function swapElements(list, x, y) {
    if (list == [] | x > list.length - 1 | y > list.length - 1) {
        return -1;
    } else {
        let temp = list[x];
        list[x] = list[y];
        list[y] = temp;
    }
    return list;
}

// Zapisz algorytm rekurencyjny konwertujący liczbę a (a jest argumentem funkcji) z systemu dziesiętnego na ósemkowy
function decimalToOctal(num) {
    if (num === 0) {
        return '0';
    } else if (num < 0) {
        return '-' + decimalToOctal(-num);
    } else {
        if (num < 8) {
            return num.toString();
        } else {
            return decimalToOctal(Math.floor(num / 8)) + (num % 8).toString();
        }
    }
}

// Dodatkowo zmodyfikuj powyższy algorytm tak, aby możliwe było zdefiniowanie poprzez dodatkowy argument systemu, na który wartość a ma zostać przekonwertowana
function decimalToAny(num, base) {
    if (num == 0) {
        return '0';
    } else if (num < 0) {
        return '-' + decimalToAny(-num, base);
    } else {
        if (num < base) {
            return num.toString()
        } else {
            return decimalToAny(Math.floor(num / base), base) + (num % base).toString();
        }
    }
}

// Zapisz algorytm rekurencyjny, obliczający największy wspólny dzielnik dla dwóch podanych liczb a i b
function nww(a, b) {
    if (b === 0) {
        return a;
    } else {
        return nww(b, a % b);
    }
}

// Napisać program za pomoca instrukcji for oraz while ktory bedzie wypisywala wszystkie liczby podzielne przez 3, 8 oraz 12 z zakresu od 0 do 12345.
function divisible0to12345for() {
    let res = [];
    for (let i = 0; i < 12346; i++) {
        let divby3 = (i % 3 == 0);
        let divby8 = (i % 8 == 0);
        let divby12 = (i % 12 == 0);
        if (divby3 | divby8 | divby12) {
            res.push(i);
        }
    }
    // console.log(res);
    return res;
}

function divisible0to12345while() {
    let res = [];
    let i = 0;
    while (i < 12346) {
        let divby3 = (i % 3 == 0);
        let divby8 = (i % 8 == 0);
        let divby12 = (i % 12 == 0);
        if (divby3 | divby8 | divby12) {
            res.push(i);
        }
        i++;
    }
    console.log(res);
    return res;
}

// Napisac funkcje ktora przyjmuje jedna liczbe typu int I zwrocic z niej informacje czy liczba ta jest podzielna przez 10, 11, 34.
function divisibleCustom(n) {
    return [n % 10 == 0, n % 11 == 0, n % 34 == 0];
}

// Metry na decymetry
function metersToDecimeters(m) {
    return m * 10;
}

// litry na pinty
function litersToPints(liters) {
    return liters * 2.11337642;
}

//  cale na cm.
function inchesToCm(inches) {
    return inches / 2.54;
}

// Temperature w Fahrenheit na Celcjusza
function FahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
}

// Stworzyc program ktory pokaze czesc wspolna dwoch tablic
function intersectOfTables(tab1, tab2) {
    let res = [];
    let d = {};
    tab1.forEach(element => {
        d[element] = null;
    })
    tab2.forEach(element => {
        if (element in d) {
            res.push(element);
        }
    })
    return res;
}

// Stworzyc program ktory obliczy ile jest liczb parzystych I nieparzystych w tablicy
function evenAndOdds(tab) {
    let even = 0;
    let odd = 0;
    tab.forEach(element => {
        if (element % 2 == 0) {
            even++;
        } else if (element % 2 != 0) {
            odd++;
        }
    })
    return [even, odd];
}

// Stworzyc program ktory znajdzie najmniejsza oraz najwieksza liczbe w tablicy
function minAndMax(tab) {
    if (tab.length == 0) {
        return null;
    } else {
        let min = tab[0];
        let max = tab[0];
        tab.forEach(element => {
            if (element < min) {
                min = element;
            }
            if (element > max) {
                max = element;
            }
        })
        return [min, max];
    }
}

// Stworzyc program ktory z podanej tablicy usunie tylko parzyste element
function deleteEven(tab) {
    tab = tab.filter(function (element) {
        return element % 2 != 0;
    })
    return tab;
}

// Stworzyc program ktory z elementow tablicy stworzy nowa tablice, skopuje te element, ktore spełniają następujące warunki
// 1. Element jest podzielny przez 5 oraz przez 6
// 2. Reszta z dzielenia wartosci element przez 7 jest rowna 1 ( elment % 7 == 1)
function newTabCustom(tab) {
    new_tab = tab.filter((element) => {
        return ((element % 5 == 0 & element % 6 == 0) | (element % 7 == 1));
    })
    return new_tab;
}

// Stworzyc program ktory do podanej tablicy doda element rowne kwadratowi kazdego element .Tablica = [1,3,5]
// 1. Iteracja 1 = [1,3,5,1,9,25]
// 2. Iteracja 2 = [1,3,5,1,9,25,1,9,25,1,81,625]
function tabSquared(tab){
    let res = tab;
    tab.forEach(element => {
        res.push(element * element);
    })
    return res;
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

module.exports = { sum, largestElement, removeDuplicats, toUpper, meanValue, isPalindrome, fibonacci, isPrime, toBinary, invertText, identical, countLetter, removeWhitespaces, removeValue, randomItem, CelsiusToFahrenheit, indexOfItem, onlyUniqe, metersToMiles, maxNumber, canBeTriangle, UnitStep, isEven, isDivibleBy12, isPrime2, analyzeInput, analyzeInput2, analyzeInput3, factorialIter, fibonacciIter, iterSum, checkList, invertList, countList, compareLists, swapElements, decimalToOctal, decimalToAny, nww, divisible0to12345for, divisible0to12345while, divisibleCustom, metersToDecimeters, litersToPints, inchesToCm, FahrenheitToCelsius, intersectOfTables, evenAndOdds, minAndMax, deleteEven, newTabCustom,tabSquared,  BubbleSort, InsertSort, SelectionSort };
