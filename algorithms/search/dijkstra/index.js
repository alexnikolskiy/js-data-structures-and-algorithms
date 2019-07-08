const PriorityQueue = require('../../../data-structures/priority-queue-heap');

function buildPath(parents, startNode, prop) {
    const endNode = Array.from(parents.keys()).pop();
    const result = [prop ? endNode[prop] : endNode];
    let parent = endNode;

    while (parent = parents.get(parent)) {
        result.push(prop ? parent[prop] : parent);
    }

    return result.reverse();
}

function search(graph, startNode, prop) {
    const distances = new Map();
    const searchQueue = new PriorityQueue(true);
    const parents = new Map();
    const nodes = graph.getNodes();

    for (let node of nodes) {
        if (node !== startNode) {
            distances.set(node, Number.POSITIVE_INFINITY);
            searchQueue.enqueue(node, Number.POSITIVE_INFINITY);
        } else {
            distances.set(node, 0);
            searchQueue.enqueue(node, 0);
        }
        parents.set(node, null);
    }

    while (!searchQueue.isEmpty()) {
        let { element, priority } = searchQueue.dequeue();
        let neighbors = graph.getNeighbors(element);

        for (let { node, weight } of neighbors) {
           let cost = priority + weight;

           if (cost < distances.get(node)) {
               distances.set(node, cost);
               parents.set(node, element);
               searchQueue.changePriority(node, cost);
           }
        }
    }

    return { distances, path: buildPath(parents, startNode, prop)};
}

module.exports = search;
