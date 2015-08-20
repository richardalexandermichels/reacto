//tail recursion

//Implement a factorial recursively:
function factorial (n){
	return n ? n * factorial(n-1) : 1;
}

//The issue with the above soltion:
//The function calls itself n times and therefore needs n stack frames
//Javascript has a limit on the stack size so you can exceed the maximum call stack size
//This implementation invokes * last, not just factorial so it requires n stack frames


//A compiler implements tail call optimization if, when it recognizes a tail-recursive function, it turns the recursive call into a while loop
//thereby reusing the current stack frame
//no need to worry about space inefficiency
//in a tail recursive manner: the last function invoked must be the recursive function

//tail-call optimization: when a function returns the result of calling itself
//the language doesn't perform another function call, it performs the function invocation with a while loop

//tail recursive solution
function factorial(n){
	function recur(n, acc){
		if(n === 0){
			return acc;
		}else {
			return recur(n-1, n*acc);
		}
	}
	return recur(n,1);
}