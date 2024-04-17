const { sum, largestElement, removeDuplicats, toUpper, meanValue, isPalindrome, fibonacci, isPrime, toBinary, invertText, identical, countLetter, removeWhitespaces, removeValue, randomItem, CelsiusToFahrenheit, indexOfItem, onlyUniqe, metersToMiles, maxNumber, canBeTriangle, UnitStep, isEven, isPrime2, analyzeInput, analyzeInput2, BubbleSort, InsertSort, SelectionSort } = require('./functions.js');

test("sum test", () => {
    expect(sum(1, 5)).toBe(6);
})

test("largestElement test", () => {
    let tab = [1, -1, 5, 15, 33, -20, 70];
    expect(largestElement(tab)).toEqual(70);
});

test("removeDuplicats test", () => {
    let tab = [1, 1, 1, 3];
    expect(removeDuplicats(tab)).toEqual([1, 3]);
});

test("toUpper test", () => {
    let text = "mini";
    expect(toUpper(text)).toBe("MINI");
})

test("meanValue test", () => {
    let tab = [1, 2, 3, 4, 5];
    expect(meanValue(tab)).toBe(3);
    expect(meanValue([])).toBe(0);
})

test("isPalindrome test", () => {
    expect(isPalindrome("kajak")).toBe(true);
    expect(isPalindrome("Kajak")).toBe(false);
    expect(isPalindrome("kajaki")).toBe(false);
})

test("fibonacci test", () => {
    expect(fibonacci(0)).toBe(1);
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(2)).toBe(2);
    expect(fibonacci(3)).toBe(3);
    expect(fibonacci(4)).toBe(5);
})

test("isPrime test", () => {
    expect(isPrime(1)).toBe(true);
    expect(isPrime(-10)).toBe(false);
    expect(isPrime(13)).toBe(true);
    expect(isPrime(17)).toBe(true);
    expect(isPrime(33)).toBe(false);
})

test("toBinary test", () => {
    expect(toBinary(1)).toBe("1");
    expect(toBinary(2)).toBe("10");
    expect(toBinary(33)).toBe("100001");
})

test("invertText test", () => {
    expect(invertText("Nic")).toBe("ciN");
    expect(invertText("Spacja ")).toBe(" ajcapS");
    expect(invertText("K a j ak")).toBe("ka j a K");
})

test("identical test", () => {
    expect(identical(1, 1)).toBe(true);
    let a = [1, 2, 3, 4];
    let b = [1, 2, 3, 4];
    let c = [1, 2, 3, 4, 5, 6];
    expect(identical(a, b)).toBe(false);
    expect(identical(a, c)).toBe(false);
})

test("countLetter test", () => {
    expect(countLetter("Nic", 'a')).toBe(0);
    expect(countLetter("Spacja ", 'a')).toBe(2);
    expect(countLetter("K a j ak", ' ')).toBe(3);
})

test("removeValue test", () => {
    expect(removeValue([1, 2, 3, 4, 5, 1, 1, 1], 1)).toEqual([2, 3, 4, 5]);
    expect(removeValue([1, 2, 3, 4, 5, 1, 1, 1], 2)).toEqual([1, 3, 4, 5, 1, 1, 1]);
    expect(removeValue([1, 2, 3, 4, 5, 1, 1, 1], 3)).toEqual([1, 2, 4, 5, 1, 1, 1]);
    expect(removeValue([1, 2, 3, 4, 5, 1, 1, 1], 0)).toEqual([1, 2, 3, 4, 5, 1, 1, 1]);

})

test("removeWhitespaces test", () => {
    expect(removeWhitespaces("Nic")).toBe("Nic");
    expect(removeWhitespaces("Spacja ")).toBe("Spacja");
    expect(removeWhitespaces("K a j ak")).toBe("Kajak");
    expect(removeWhitespaces("           ")).toBe("");
})

test("CelsiusToFahrenheit test", () => {
    expect(CelsiusToFahrenheit(0)).toBe(32);
    expect(CelsiusToFahrenheit(100)).toBe(212);
    expect(CelsiusToFahrenheit(-40)).toBe(-40);
    expect(CelsiusToFahrenheit(37)).toBe(98.6);
});


test("randomItem test", () => {
    expect(randomItem([0])).toBe(0);
    let tab = [0, 12, 3, 4, 5];
    expect(tab).toContain(randomItem(tab));
})

test("indexOfItem test", () => {
    expect(indexOfItem([1, 2, 34, 5], 34)).toBe(2);
    expect(indexOfItem([1, 2, 34, 5], 2)).toBe(1);
    expect(indexOfItem([1, 2, 34, 5], 342)).toBe(-1);
})

test("onlyUniqe test", () => {
    expect(onlyUniqe([1, 2, 34, 5])).toEqual([1, 2, 34, 5]);
    expect(onlyUniqe([1, 1, 2, 34, 5])).toEqual([2, 34, 5]);
    expect(onlyUniqe([0, 0, 0])).toEqual([]);
})

test("metersToMiles test", () => {
    expect(metersToMiles(0)).toBe(0);
    expect(metersToMiles(1608)).toBe(1);
    expect(metersToMiles(804)).toBe(0.5);
})

test("maxNumber test", () => {
    expect(maxNumber(0, 1, 3)).toBe(3);
    expect(maxNumber(1, 2, 4)).toBe(4);
    expect(maxNumber(-2, 0, 0)).toBe(0);
})

test("canBeTriangle test", () => {
    expect(canBeTriangle(1, 1, 1)).toBe(true);
    expect(canBeTriangle(1, 2, 4)).toBe(false);
})

test("UnitStep test", () => {
    expect(UnitStep(1, 3)).toBe(0);
    expect(UnitStep(3, 3)).toBe(0);
    expect(UnitStep(4, 3)).toBe(1);
})

test("isEven test", () => {
    expect(isEven(5)).toBe(false);
    expect(isEven(7)).toBe(false);
    expect(isEven(74)).toBe(true);
    expect(isEven(2)).toBe(true);
})

test("isPrime2 test", () => {
    expect(isPrime2(5)).toBe(true);
    expect(isPrime2(7)).toBe(true);
    expect(isPrime2(4)).toBe(false);
    expect(isPrime2(15)).toBe(false);
    expect(isPrime2(17)).toBe(true);
    expect(isPrime2(66)).toBe(false);
})

test("analyzeInput test", () => {
    expect(analyzeInput([], 6)).toBe(false);
    expect(analyzeInput([1, 2, 3, 4, 5, 0], 6)).toBe(false);
    expect(analyzeInput([1, 2, 3, 4, 5, 0], 4)).toBe(true);
    expect(analyzeInput([1, 2, 3, 4, 5, 0], 5)).toBe(false);
})

test("analyzeInput2 test", () => {
    expect(analyzeInput2([], 6)).toBe(0);
    expect(analyzeInput2([1, 2, 3, 4, 5, 0], 6)).toBe(0);
    expect(analyzeInput2([1, 2, 3, 4, 5, 0], 4)).toBe(1);
    expect(analyzeInput2([1, 2, 3, 4, 5, 0], 5)).toBe(0);
    expect(analyzeInput2([1, 2, 3, 4, 5, 0], 1)).toBe(4);
})
test("BubbleSort test", () => {
    let tab = [1, -1, 5, 15, 33, -20, 70];
    BubbleSort(tab);
    expect(tab).toEqual([-20, -1, 1, 5, 15, 33, 70]);
});

test("InsertSort test", () => {
    let tab = [1, -1, 5, 15, 33, -20, 70];
    InsertSort(tab);
    expect(tab).toEqual([-20, -1, 1, 5, 15, 33, 70]);
});

test("SelectionSort test", () => {
    let tab = [1, -1, 5, 15, 33, -20, 70];
    SelectionSort(tab);
    expect(tab).toEqual([-20, -1, 1, 5, 15, 33, 70]);
});