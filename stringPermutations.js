//http://slides.com/jimmyfarrell/string-permutations#/4

//Question
// Given a string, return an array of all the permutations of that string
// The permutations of the string should be the same length as the original string
// The array that is returned should only contain unique values
// The array that is returned should be sorted alphabetically

//Examples
//stringPermutations('one')
//should return ['eon', 'eno', 'neo', 'noe', 'one', 'oen']

//stringPermutations('app')
//should return ['app', 'pap', 'ppa']

//stringPermutations('nn')
//should return ['nn']

//Solution 1
// function stringPermutations(str) {
//     var results = [ ];
//     var letters = str.split('');
//     results.push([letters.shift()]) //add first letter (as an array) to results
//     while (letters.length) {
//         var curLetter = letters.shift();
//         var tmpResults = [ ];
//         results.forEach(function(curResult) {
//             for (var i = 0; i<= curResult.length; i++) {
//                 var tmp = curResult.slice(); //make copy so we can modify it
//                  //insert the letter at the current position
//                 tmp.splice(i,0,curLetter)
//                 tmpResults.push(tmp);
//             }
//         });
//         results = tmpResults; //overwrite the previous results
//     }
//     results = results.map(function(letterArr) {
//         return letterArr.join(''); //make string from letter array
//     });
//     return results.filter(function(el,index) {
//         return results.indexOf(el) === index; //filter out non-unique words
//     }).sort();
// }

// stringPermutations('apple');
// stringPermutations('apple').length; //should be 60 (5 * 4 * 4 * 2 * 1 / 2 - you divide because of the repeated p)

//Solution 2
// function recursiveStringPermutations(str) {
//     var results = [ ];
//     getPerms(str, [ ])
//     function getPerms(str, arr) {
//         if (typeof str === 'string')
//             //on first call, split the string into an array 
//             str = str.split('');
//         if (!str.length) 
//             //base case- push the compiled results into the results variable
//             results.push(arr.join('')); 
//         for (var i = 0; i < str.length; i++) {
//             var letter = str.splice(i, 1); 
//             arr.push(letter);
//             getPerms(str, arr); //recursive call
//             arr.pop(); 
//             str.splice(i, 0, letter);
//         }
//     }
//     return results.filter(function(el,index) {
//         return results.indexOf(el) === index; //filter out non-unique words
//     }).sort();
// }