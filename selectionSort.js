// http://slides.com/gtelljohann/reacto-selection-sort#
//Create a selection sort algorithm

//solution
function selectionSort(array){
	for(var i = 0; i < array.length; i++){
		var minVal = array[i];
		var minIdx = i;

		for(var j = i + 1; j <array.length; j++){
			if(array[j] < array[minIdx]){
				minVal = array[j];
				minIdx = j;
			}
		}

		array[minIdx] = array[i];
		array[i] = minVal;
	}
	return array;
}

//Performance
//Time complexity:
//O(n^2) for each item in the array, it takes time proportional to the number of items in the array

//Space complexity:
//O(n) total, O(1) extra - it's in place so you're only using constant space in addition to the initial array

