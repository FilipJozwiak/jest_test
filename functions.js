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
function fibonacci(n){
    if (n < 2){
        return 1;
    } else{
        return fibonacci(n-1) + fibonacci(n - 2);
    }
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

module.exports = { sum, largestElement, removeDuplicats, toUpper, meanValue, isPalindrome, fibonacci, BubbleSort, InsertSort, SelectionSort };
