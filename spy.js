/*Testing and assertion libraries like Jasmine, Mocha, Chai, Sinon etc. have a sepcial feature called spies.
Spies allow test specs to track how specific functions of interest are used: 
	+whether they are called
	+how many times they are called
	+what they return
	+if they throw errors

Implement a spyOn function which does the following:
+Takes a function func as its parameter
+Returns a spy function spy that takes any number of arguments
+spy calls func with the given arguments and returns what func returns
+spy has the following methods:
	+.getCallCount() : returns the number of times spy has been called
	+.wasCalledWith(val) : returns true if spy was ever called with val, else returns false
	+.returned(val) : returns true if spy ever returned val, else returns false
*/

// Example
// function adder(n1, n2) { return n1 + n2;}
// var adderSpy = spyOn (adder);
// adderSpy.getCallCount(); //0
// adderSpy(2,4); // returns 6
// adderSpy.getCallCount(); //1
// adderSpy(3,5); // returns 8
// adderSpy.getCallCount(); //2
// adderSpy.wasCalledWith(2); //true
// adderSpy.wasCalledWith(0); //false
// adderSpy.returned(6); //true
// adderSpy.returned(9); //false


//Possible solution
var spyOn = function (func){
	var callCount = 0,
		callVals = [],
		retVals = [];

	var spy = function(){
		var args = [].slice.call(arguments);
		var retVal = func.apply(func, args);
		retVals.push(retVal);
		callVals = callVals.concat(args);
		callCount++;
		return retVal;
	};

	spy.getCallCount = function (){
		return callCount;
	};

	spy.wasCalledWith = function (val){
		return (callVals.indexOf(val) > -1);
	};


	spy.returned = function (val){
		return (retVals.indexOf(val) > -1);
	};

	return spy;
};