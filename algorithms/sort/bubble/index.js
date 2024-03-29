function bubbleSort(arr) {
    const length = arr.length;

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}

module.exports = bubbleSort;
