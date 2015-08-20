// //Implement the following custom Array methods:
// even//[1,2,3,4,5].even() should return [2,4];
// odd // [1,2,3,4,5].odd() should return [1,3,5];
// under // [1,2,3,4,5].under(4) should return [1,2,3];
// over // [1,2,3,4,5].over(4) should return [5];
// inRange // [1,2,3,4,5].inRange(1,3) should return [1,2,3];

// //They should also be chainable
// //Filters should only accept integer values from an array

//Solution

Array.prototype.isInt = function (){
	return this.filter(function(n){ return (typeof(n) === 'number') && (n%1 === 0)})
};

Array.prototype.even = function (){
	return this.isInt().filter(function(n){ return n%2 === 0})
};

Array.prototype.odd = function (){
	return this.isInt().filter(function(n){ return n%2 !== 0})
};

Array.prototype.under = function (x){
	return this.isInt().filter(function(n){ return n < x})
};

Array.prototype.over = function (x){
	return this.isInt().filter(function(n){ return n > x})
};

Array.prototype.inRange = function (min, max){
	return this.isInt().filter(function(n){ return n >= min && n <= max})
};
