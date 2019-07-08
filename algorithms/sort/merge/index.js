function merge(left, right) {
    const leftLength = left.length;
    const rightLength = right.length;
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftLength && rightIndex < rightLength) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];
}

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

module.exports = mergeSort;
