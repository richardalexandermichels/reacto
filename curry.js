//Currying is the process by which a function of N arguments
//is implemented as N single-argument functions
//such that the first of them takes in the first argument and returns a function
//which takes in the second argument and so on
//until the Nth single-argument function finally returns the value
//of the multi-argument function being implemented

//example 1
//function doMath(a,b,c,d){
	// return a + b - c *d
// }

// var curried = curry(doMath);
// var steph1 = curried(1); //returns a function
// var steph2 = steph1(2); // returns a function
// var steph3 = steph2(3); //returns a function
// var steph4 = steph3(4); // -9

//example2
//function doMath(a,b,c,d){
	// return a + b - c *d
// }

// var curried = curry(doMath);

// var makeOne = curried(1);
// var makeTwo = makeOne(2);

// var returned1 = makeOne(3,4,5); //-16 (1+3-4*5)
// var returned2 = makeTwo(4,5); //-17 (1+2-4*5)


// Possible Solution
function curry(originalFunc){
	var originalLength = originalFunc.length;

	function resolver(){
		var memory = Array.prototype.slice.call(arguments);

		var whatToReturn = function(){
			var next, 
				args = Array.prototype.slice.call(arguments),
				copy = memory.concat(args);

			if(copy.length >= originalLength){
				next = originalFunc;
			}else{
				next = resolver;
			}

			return next.apply(null, copy);
		};

		return whatToReturn;
	}

	return resolver();
}


//Bonus
//Edit the curry function to where you control the order of the arguments
//Example
//function doMath(a,b,c,d){
	// return a + b - c *d
// }

// var curried = curry(doMath);

// var steph1 = curried(empty args...,1);
// var steph2 = steph1(1,2,3); //0 (1+2-3*1)

//Possible solution

function curry( originalFunc ) {
    this.__ = {};
    var __ = this.__;
    
	var originalLength = originalFunc.length;
	
	var isFilled = function(list) {
	    return list.every(function(item) {
	        return item !== __;
	    });
	};
	
	var getMemory = function(a) {
	    return Array.apply(
        null, 
        new Array(originalLength)).map(function(_, i) {
		    return a.shift() || __;   
		});
	};
	
	var applyToMemory = function(m, a) {
	    m.forEach(function(item, index) {
	        if (item === __) {
	            m[index] = a.shift();
	        }
	    });
	};

	function resolver() {
	    var args = Array.prototype.slice.call(arguments);
		var memory = getMemory(args);
		
		var returningFunction = function() {
			var next,
			    args = Array.prototype.slice.call( arguments );
			
			applyToMemory(memory, args);

		
		    if (isFilled(memory)) {
		        next = originalFunc;    
		    } else {
		        next = resolver;   
		    }

			return next.apply(null, memory); 
		};

	
		return returningFunction;
	}

	return resolver(); 
}


function addNums(a, b, c, d) {
    console.log(a, b, c, d);
    return a + b - c * d;
}

var __ = curry.__;
var curried = curry(addNums);
var lastOne = curried(__, __, __, 1);
lastOne(1,2,3);
