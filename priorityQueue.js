//http://slides.com/gtelljohann/reacto-priority-queue#/
//A queue is a data structure that stores pieces of data and returns them in the same order
//in which they were inserted.  One way of implementing them is a linked list.

//A priority queue is a data structure that takes with each piece of data
//a priority value and returns data in the order of priority.


//The question
//Implement a priority queue with the following 3 methods:
//insert(data, priority) //inserts data into the priority queue with the given priority
//peek() //returns the value of the item with the highest priority without removing it from the priority queue
//popMax() // returns the value of the item with the highest priority and also removes it from the priority queue


//Solution
function Node(data, priority){
	this.data = data;
	this.priority = priority;
	this.next = null;
}

function PriorityQueue(){
	this.first = null;
}

PriorityQueue.prototype.insert = function (data, priority){
	if(!this.first || this.first.priority < priority){
		var prevFirst = this.first;
		this.first = new Node(data, priority);
		this.first.next = prevFirst;
	}else{
		var pointer = this.first;
		while(pointer.next && pointer.next.priority >= priority){
			pointer = pointer.next;
		}

		var newItem = new Node(data, priority);
		newItem.next = pointer.next;
		pointer.next = newItem;
	}
};

PriorityQueue.prototype.peek = function(){
	return this.first.data;
};

PriorityQueue.prototype.popMax = function(){
	var retVal = this.first.data;
	this.first = this.first.next;
	return retVal;
};

//Performance
//insert is O(n)
//peek is O(1)
//popMax O(1)