// Recall that a stack is a last in first out data structure
// Data is always added to and removed from the top

// Implement a stack data structure that has the following functions:
// +push(value) // to add elements (to the top of the stack)
// +pop() // removes the top element and returns its value
// +min() // returns the minimum element

// All of the above functions should run in constant O(1) time
// No arrays or array methods should be used

// Approach:
// Need to implement a regular stack with 1 extra requirement - returning min() at any given time
// Have a separate structure that keeps track of the minimum for each node added
// when you remove a node, remove the minimum that corresponds

//Solution
function Stack() {
    this.top = null;
}

Stack.prototype.minimum = function() {
    return this.minStack.peek();
}

Stack.prototype.push = function(val) {
    var newNode = new Node(val);
    if (!this.top) {
        this.top = newNode;
        return;
    }
    newNode.next = this.top;
    this.top = newNode;
     if (!this.minStack) {
        this.minStack = new Stack();
        this.minStack.push(val);
     }
    else if (this.minimum() > val) 
        this.minStack.push(val);
    else
        this.minStack.push(this.minimum());
};

Stack.prototype.pop = function() {
    if (!this.top) return null;
    var popped = this.top.val;
    this.top = this.top.next;
    if (this.minStack)
        this.minStack.pop();
    return popped;
};

Stack.prototype.peek = function() {
    if (!this.top) return null;
    return this.top.val;
};

Stack.prototype.isEmpty = function() {
    return this.top === null || this.top === undefined;
};

function Node(val,next) {
    this.val = val;
    this.next = next;
}