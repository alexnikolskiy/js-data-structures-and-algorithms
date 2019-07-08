function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function quickSort(arr = [], left = 0, right = arr.length - 1) {
    if (left >= right) {
        return;
    }

    const k = Math.floor(Math.random() * (right + 1 - left)) + left;
    swap(arr, left, k);

    const pivot = arr[left];
    let j = left;

    for (let i = left + 1; i <= right; i++) {
        if (arr[i] <= pivot) {
            j++;
            swap(arr, i, j)
        }
    }

    swap(arr, left, j);
    quickSort(arr, left, j - 1);
    quickSort(arr, j + 1, right);
}

module.exports = quickSort;
