const Queue = require('../../../data-structures/queue');

function buildPath(parents, target, prop) {
    let targetNode = target;
    const res = [prop ? targetNode[prop] : targetNode];

    while (parents.get(targetNode)) {
        targetNode = parents.get(targetNode);
        res.push(prop ? targetNode[prop] : targetNode);
    }

    return res.reverse();
}

function search(graph, source, cb, prop) {
    const searchQueue = new Queue();
    const searched = new Set();
    const searchPath = [];
    const parents = new Map();

    searchQueue.enqueue(source);

    while (!searchQueue.isEmpty()) {
        const node = searchQueue.dequeue();

        searchPath.push(prop ? node[prop] : node);

        if (cb(node)) {
            const shortestPath = buildPath(parents, node, prop);

            console.log(`search path: ${searchPath.join([' -> '])}`);
            console.log(`shortest path: ${shortestPath.join([' -> '])}`);
            console.log(`shortest path length: ${shortestPath.length - 1}`);

            return node;
        }

        const neighbors = graph.getNeighbors(node);

        for (let { node: neighbor } of neighbors) {
            if (searched.has(neighbor)) {
                continue;
            }

            parents.set(neighbor, node);
            searchQueue.enqueue(neighbor);
        }

        searched.add(node);
    }
}

module.exports = search;
