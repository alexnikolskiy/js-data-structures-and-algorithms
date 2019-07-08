function binarySearch(arr, search) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === search) {
            return mid;
        } else if (arr[mid] > search) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
}

module.exports = binarySearch;
