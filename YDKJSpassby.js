function changeStuff(num, obj1, obj2){
	num = num*10;
	obj1.item = "changed";
	obj2 = {item: "changed"};
}

var num = 10;
var obj1 = {item: "unchanged"};
var obj2 = {item: "unchanged"};

changeStuff(num, obj1, obj2);

console.log(num);
console.log(obj1.item);
console.log(obj2.item);

//1. What will each of the console.log print out and why?
//2. What is the difference between Pass-By-Value evaluation and Pass-By-Reference evaluation?
//3. Which strategy does Javascript's evaluation strategy fall under? How?
//4. What is the difference between Mutating vs Rebinding?

//Solutions
//1. 
//10, changed, unchanged
//Javascript uses Call-By-Sharing strategy

//2. 
//Pass-By-Value
//In this strategy, the value of the arguments that are passed into the functions
//are copies of the values of the objects and primitives passed by the
//invocation of the function

//Pass-By-Reference
//In this strategy, the value of the arguments that are passed into the functions
//are direct pointers to the objects and primitivies passed by the
//invocation of the function

//3.
//Javascript uses Call-By-Sharing
//In this strategy, the value of the arguments that are passed into the functions
//are copy of the reference (pointer) to the objects and primitives passed by the
//invocation of the function

//4.
//Mutating - in contrast with rebinding, mutating only affects the content of the object
//not the connections between the variable pointers and the object itself
//obj.name = "mutation"

//Rebinding - the process by which a variable that previously pointed to an object
//not points to another object via reassignment
//obj = {name: "reassigned"}