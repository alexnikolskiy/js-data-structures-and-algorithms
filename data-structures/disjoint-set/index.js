class DisjointSet {
    constructor() {
        this.smallest = new Map();
    }

    makeSet(i) {
        this.smallest.set(i, i);
    }

    find(i) {
        return this.smallest.get(i);
    }

    union(i, j) {
        const iID = this.find(i);
        const jID = this.find(j);

        if (iID === jID) { return; }

        const min = Math.min(iID, jID);
        for (let k of this.smallest.keys()) {
            if ([iID, jID].includes(this.smallest.get(k))) {
                this.smallest.set(k, min);
            }
        }
    }
}

module.exports = DisjointSet;
