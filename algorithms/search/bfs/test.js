const assert = require('assert').strict;
const Graph = require('../../../data-structures/graph');
const search = require('./index');

class Friend {
    constructor({name, sex, married} = {}) {
        this.name = name;
        this.sex = sex;
        this.married = married;
    }
}

const Alex = new Friend({ name: 'Alex', sex: 'male', married: false });
const Jhon = new Friend({ name: 'Jhon', sex: 'male', married: true });
const Andrew = new Friend({ name: 'Andrew', sex: 'male', married: true });
const Rebecca = new Friend({ name: 'Rebecca', sex: 'female', married: false });
const Mary = new Friend({ name: 'Mary', sex: 'female', married: false });
const Alice = new Friend({ name: 'Alice', sex: 'female', married: true });
const Claire = new Friend({ name: 'Claire', sex: 'female', married: true });
const Peggy = new Friend({ name: 'Peggy', sex: 'female', married: false });
const Bob = new Friend({ name: 'Bob', sex: 'male', married: true });

const graph = new Graph();

graph.addNode(Alex);
graph.addNode(Jhon);
graph.addNode(Andrew);
graph.addNode(Rebecca);
graph.addNode(Alice);
graph.addNode(Claire);
graph.addNode(Peggy);
graph.addNode(Bob);

graph.addDirectedEdge(Alex, Alice);
graph.addDirectedEdge(Alex, Bob);
graph.addDirectedEdge(Alex, Claire);
graph.addDirectedEdge(Alice, Peggy);
graph.addDirectedEdge(Bob, Peggy);
graph.addDirectedEdge(Bob, Rebecca);
graph.addDirectedEdge(Claire, Jhon);
graph.addDirectedEdge(Claire, Andrew);

const isNotMarried = friend => !friend.married && friend.sex === 'female';
const friend = search(graph, Alex, isNotMarried, 'name');

assert.deepEqual(friend, Peggy);
console.info('OK!');
