const { sum, largestElement, removeDuplicats, toUpper, meanValue, isPalindrome, fibonacci, BubbleSort, InsertSort, SelectionSort } = require('./functions.js');

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