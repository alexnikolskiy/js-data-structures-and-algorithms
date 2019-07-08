function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function leftChild(i) {
    return 2 * i + 1;
}

function rightChild(i) {
    return 2 * i + 2;
}


function siftDown(arr, size, i) {
    let maxIndex = i;

    const l = leftChild(i);
    if (l <= size && arr[maxIndex] < arr[l]) {
        maxIndex = l;
    }

    const r = rightChild(i);
    if (r <= size && arr[maxIndex] < arr[r]) {
        maxIndex = r;
    }

    if (i !== maxIndex) {
        swap(arr, i, maxIndex);
        siftDown(arr, size, maxIndex);
    }
}

function buildHeap(arr) {
    const size = arr.length - 1;
    const len = Math.floor(arr.length / 2) - 1;

    for (let i = len; i >= 0; i--) {
        siftDown(arr, size, i);
    }

}

function heapSort(arr) {
    let size = arr.length - 1;

    buildHeap(arr);

    while (size > 0) {
        swap(arr, 0, size--);
        siftDown(arr, size, 0);
    }

    return arr;
}

module.exports = heapSort;
