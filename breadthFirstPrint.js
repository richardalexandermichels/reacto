//http://slides.com/benjaminconant/reacto#/

//Given a tree data structure
//write a function that prints out the content of the tree in a bread-first way

//Content at the same level should be printed on a line with spaces between each value
//Content from the next level down should be on a new line

//The top node will be passed into your function
//Each node in the tree contains the following properties
//.value - the content of the node that should be printed
//.children - an ordered array of child nodes for that node

//Solution
function printTreeLevels (startingNode) {

  // This will be a multi-dim array of "level" arrays, each containing values
  var levels = [];

  // recursive IIFE to collect each value and add it to the right level array
  (function collectVals (node, level) {
    // if there is no level this deep yet, make it
    levels[ level ] = levels[ level ] || [];
    levels[ level ].push( node.value );
    // recursively handle each child node, one level deeper
    node.children.forEach(function (childNode) {
      collectVals( childNode, level+1 );
    });
  })( startingNode, 0 );

  // Print the results
  levels.forEach(function (level) {
    console.log( level.join(' ') );
  });

}

/* A sample tree to test, should print the following:
A
B C
D E F G
H I J
*/

var myTree = {
  value: 'A',
  children: [{
    value: 'B',
    children: [{
      value: 'D',
      children: [{
        value: 'H',
        children: []
      }]
    }]
  }, {
    value: 'C',
    children: [{
      value: 'E',
      children: []
    }, {
      value: 'F',
      children: [{
        value: 'I',
        children: []
      }, {
        value: 'J',
        children: []
      }]
    }, {
      value: 'G',
      children: []
    }]
  }]
};

printTreeLevels(myTree);
