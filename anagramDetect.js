//An anagram is a word, phrase, or name formed by rearranging the letters of another

//Given an array of strings
//Create a function to find all the arrangements within the array
//Output should be an ordered list, each row displaying a word and all of its anagrams
//function output should ignore all words that are not anagrams

//Approach
//Take all the words in the array and using the map function, split each word, sort them, and join them again
//Create a hash table of the words
//Go through the table and if the array length of each word is > 1, its anagram exists.  return the words


//solution
var table = {};

function anagramFunction(words) {

//Map, split, sort and join all the words in the array 
    var sortedWords = words.map( function( word ){
          return word.split('').sort().join('');
    });

/* Create a table of key/value pairs. The key would be the first instance 
of each sorted word and value should be an array that consists of the word 
and its anagrams (or just the word itself if there is no anagram) */

    sortedWords.forEach( function ( sortedWord, index){
          table[sortedWord] = table[sortedWord] || [];
          table[sortedWord].push( words[index] );
    });

//All arrays in the table with a size > 1 are anagrams

    Object.keys( table ).forEach( function( sortedWord , index  ){
          var value = table[sortedWord];
          if( value.length > 1 ){
              console.log( index + 1 + ". " + value.join(', ') );
          }
    });

}