//http://slides.com/jamestillman/reacto#/
//Given an array arr and an integer k
//Choose all the possible different combinations of k elements from arr

//example
//var arr = [1,2,3];
//var k = 2;
//nChooseK(arr, k); // should return [[1,2],[2,3],[1,3]]

//solution
function nChooseK(arr, k){
	if(arr.length === k){
		return [arr];
	}else if(k === 1){
		return arr.map(function(n){return [n];});
	}else{
		var head = arr[0];
		var tail = arr.slice(1, arr.length);
		var first = nChooseK(tail, k-1).map(function(n){
			return n.concat(head);
		});

		var second = nChooseK(tail, k);
		return second.concat(first);
	}
}