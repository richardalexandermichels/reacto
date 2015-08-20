//Question
//Given a sorted array of numbers, locate the index of a specified value by using the following algorithm

//Approach
//Identify the middle number of the array
//Determine if the desired value is higher, lower, or equal to the middle number
//If it is equal you are finished
//If not, repeat steps using only half of the previous set of numbers until you locate the desired value

//Solution 1: Iterative
function binarySearch(array, value){
	var start = 0;
	var end = array.length -1;

	while(start <= end){
		var midIndex = Math.floor((start+end)/2);
		var midValue = array[midIndex];

		if(midValue === value){
			return midIndex;
		}else if(midValue < value){
			start = midIndex + 1;
		}else{
			end = midIndex - 1;
		}
	}

	return -1;
}

//Solution 2: Recursive
function binarySearch(array, value, start, end){
	if(start>end) return -1;

	var midIndex = Math.floor((start+end)/2);
	var midValue = array[midIndex];

	if(value < midValue){
		return binarySearch(array, value, start, midIndex-1);
	}

	if(value > midValue){
		return binarySearch(array, value, midIndex+1, end);
	}

	return midIndex;
}