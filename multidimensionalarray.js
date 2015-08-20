/* You have an array that consists of subarrays that are of varying length.  
Write a function to find the sum of each element in the array.
You may not use any Array methods such as reduce
The only Array method you can use is for checking the type of an element
Note: The array elements can also contain arrays as their elements (you can have any amount of nesting)*/

// Examples
// mdArraySum([1,2,3,4]); //should return 10
// mdArraySum([ [2,4], [1], [4,2,1]]); // should return 14
// mdArraySum([ 2, [3,4], 5, [-3, [6, [4,5]]]]); //should return 26

//Approach
//1.  The initial sum is 0
//2. Check each element in the array:
	//if it is not an array, add it to the sum
	//if it is an array, add the sum of its elements to current sum
//3. Return the final sum after going through every element in the input array

//Possible solution
function mdArraySum(arr){
	var sum = 0;
	for(var i = 0; i < arr.length; i++){
		if(Array.isArray(arr[i])){
			sum += mdArraySum(arr[i]);
		}
		else{
			sum += arr[i];
		}
	}
	return sum;
}