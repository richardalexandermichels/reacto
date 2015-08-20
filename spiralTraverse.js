//Given a multi-dimensional array of integers
//From top left, spiral traverse each element in a clockwise order
//Return the integers in a single array

//Example
//[[0 ,1 , 2], [3, 4, 5], [6, 7, 8]]
//output: [0, 1, 2, 5 ,8, 7, 6, 3, 4]

//Possible approach
//Start with an empty array []
//Base case: if the length of the array is 0 or 1, just return empty array or the one array
//If the length of the array is greater than 1, push the elements of the top row into the empty array
//Transform the remaining elements so we can continue pushing the top row of elements into the empty array, use recursion

//Solution 
var spiral = function(box) {

    if (box.length === 1) return box[0];

    var firstRow = box.shift();
    var nextBox = [];

    var colIndex = box[0].length - 1;
    var numRows = box.length;

    for (colIndex; colIndex >= 0; colIndex--) {
        var nextRow = [];
        for (var rowIndex = 0; rowIndex < numRows; rowIndex++) {
            nextRow.push(box[rowIndex][colIndex]);
        }
        nextBox.push(nextRow);
    }

    return firstRow.concat(spiral(nextBox));
};

//Solution 2 outline
//Use shift to concat the first array with results
//Pop the last element of the remaining subarrays
//Reverse the remaining subarrays and their elements
//Reverse each of the elements in the subarrays
//Use recursion to call the function again
//Use shift to concat the first array with results
//Pop last element to results
//Reverse remaining elements
//Shift to results

//Solution 2:
// function getSpiralElements(input) {
//     var results = [ ];
//     var limit = 20;
//     function getSpiralHelper(multiDimArr) {
//         if (multiDimArr.length === 1 || multiDimArr.length === 0) {
//           if (multiDimArr[0] && multiDimArr[0].length) {
//               results = results.concat(multiDimArr[0]);
//           }
//           return;
//         }
//         results = results.concat(multiDimArr.shift());
//         multiDimArr.forEach(function(subArray) {
//             results = results.concat(subArray.pop());
//         });
//         multiDimArr = multiDimArr.reverse();
//         multiDimArr.forEach( function (el, index, arr) {
//             arr[index] = el.reverse();
//         });
//         return getSpiralHelper(multiDimArr);
//     }
//     var valid = true;
//     input.forEach(function (el) {
//         if (el instanceof Array === false ) 
//             valid = false;
//     });
//     if (!valid) throw new TypeError("Input should be an array of arrays!")
//     getSpiralHelper(input);
//     return results;
// }