# A classic queue

In a file called `queue.js` implement the following:

Using a literal object - `{}` - create an object, that behaves like a queue.

For example, if we store our queue like this:

```javascript
var queue = {
    // implementation
}
```

It should have the following methods:

* `queue.push(item)` - pushes the item to the queue
* `queue.pop()` - returns the item on top of the queue
* `queue.isEmpty()` - returns true if the queue is empty

Here is an example:

```javascript
function bfs(graph, start, end) {
  prev = {};
  visited = [start];
  queue.push(start);

  while(!queue.isEmpty()) {
    var node = queue.pop();

    if(node.is(end)) {
      // do something
      return
    }
    
    graph.getNeighbours(node).forEach(function(n) {
      if(visited.indexOf(n) !== -1) {
        visited.push(n);
        prev[n] = node;

        queue.push(n);
      }
    });
  
  }
}
```

## Testing implementation

To export for testing with `nodeunit` add 

```javascript
exports.queue = queue
```

Create test file in test/queue-test.js

```javascript
var queue = require('../queue').queue;
```

For continues run on the test 

```javascript
nodemon -x "nodeunit queue-test.js"
```