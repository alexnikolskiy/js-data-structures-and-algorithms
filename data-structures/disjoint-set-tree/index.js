class DisjointSet {
    constructor() {
        this.parent = new Map();
        this.rank = new Map();
    }

    makeSet(i) {
        this.parent.set(i, i);
        this.rank.set(i, 0);
    }

    find(i) {
        while (i !== this.parent.get(i)) {
            i = this.parent.get(i);
        }

        return i;
    }

    union(i, j) {
        const iID = this.find(i);
        const jID = this.find(j);

        if (iID === jID) { return; }

        if (this.rank.get(iID) > this.rank.get(jID)) {
            this.parent.set(jID, iID);
        } else {
            this.parent.set(iID, jID);

            if (this.rank.get(iID) === this.rank.get(jID)) {
                this.rank.set(jID, this.rank.get(jID) + 1);
            }
        }
    }
}

module.exports = DisjointSet;
