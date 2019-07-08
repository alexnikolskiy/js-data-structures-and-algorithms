class Node {
    constructor(value) {
        this.value = value;
        this.parent = null;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    find(value, root) {
        if (root.value === value) {
            return root;
        } else if (root.value > value) {
            if (root.left !== null) {
                return this.find(value, root.left)
            } else {
                return root;
            }
        } else {
            if (root.right !== null) {
                return this.find(value, root.right);
            } else {
                return root;
            }
        }
    }

    next(node) {
        if (node.right !== null) {
            return this.leftDescendant(node.right);
        } else {
            return this.rightAncestor(node);
        }
    }

    leftDescendant(node) {
        if (node.left === null) {
            return node;
        } else {
            return this.leftDescendant(node.left);
        }
    }

    rightAncestor(node) {
        if (node.parent === null) { return null }

        if (node.value < node.parent.value) {
            return node.parent;
        } else {
            return this.rightAncestor(node.parent);
        }
    }

    insert(value) {
        const node = new Node(value);

        if (this.root === null) {
            this.root = node;
        } else {
            const parent = this.find(value, this.root);

            if (parent.value > value) {
                parent.left = node;
            } else {
                parent.right = node;
            }
            node.parent = parent;
        }
    }

    delete(value) {
        const node = this.find(value, this.root);

        if (node.right === null) {
            if (node.left) {
                node.left.parent = node.parent;
            }

            if (node.value < node.parent.value) {
                node.parent.left = node.left;
            } else {
                node.parent.right = node.left;
            }

            node.parent = null;
            node.left = null;
        } else {
            const x = this.next(node);

            if (x.parent !== node) {
                x.parent.left = x.right;
            }

            if (node.value < node.parent.value) {
                node.parent.left = x;
            } else {
                node.parent.right = x;
            }

            x.parent = node.parent;
            x.left = node.left;
            x.left.parent = x;
            if (x !== node.right) {
                x.right = node.right;
            }
            node.parent = null;
            node.left = null;
            node.right = null;
        }

    }

    rangeSearch(x, y) {
        const res = [];
        let node = this.find(x, this.root);

        while (node.value <= y) {
            if (node.value >= x) {
                res.push(node.value);
            }
            node = this.next(node);
        }

        return res;
    }
}

module.exports = BST;
