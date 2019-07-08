const Stack = require('../../../data-structures/stack');

function search(graph, source, cb, prop) {
    const searchStack = new Stack();
    const visited = new Set();
    const searchPath = [];

    searchStack.push(source);

    while (!searchStack.isEmpty()) {
        const node = searchStack.pop();

        if (!visited.has(node)) {
            searchPath.push(prop ? node[prop] : node);

            if (cb(node)) {
                console.log(searchPath.join([' -> ']));
                return node;
            }

            const neighbors = graph.getNeighbors(node);

            for (let { node: neighbor } of neighbors) {
                searchStack.push(neighbor);
            }

            visited.add(node);
        }
    }
}

module.exports = search;
