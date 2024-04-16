const { BubbleSort, InsertSort, SelectionSort } = require('./functions.js');

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
    console.log(tab);
    expect(tab).toEqual([-20, -1, 1, 5, 15, 33, 70]);
});