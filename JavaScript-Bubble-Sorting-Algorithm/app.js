function bubbleSort (array) {
    let n = array.length;
    let swapped;

    console.log("Original array:", array);

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapped = true;
            }
        }
        n--;
    } while (swapped);

    console.log("Sorted array:", array);
    return array;
}

const numbers = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(numbers);