function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    const pivot = arr[0];
    const length = arr.length;
    const less = [];
    const greater = [];

    for (let i = 1; i < length; i++) {
        if (arr[i] <= pivot) {
            less.push(arr[i])
        } else {
            greater.push(arr[i]);
        }
    }

    return [...quickSort(less), pivot, ...quickSort(greater)];
}

module.exports = quickSort;
