function BubbleSort(tab) {
    let sorted = true
    for(let i = 0; i< tab.length; i++){
        for (let j = 0; j < tab.length - 1; j++){
            if (tab[j] > tab[j+1]){
                let _temp = tab[j];
                tab[j] = tab[j+1];
                tab[j+1] = _temp;
                sorted = false;
            }
        }
        if (sorted){
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

module.exports = {BubbleSort, InsertSort, SelectionSort};
