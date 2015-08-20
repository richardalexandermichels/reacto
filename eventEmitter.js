//Implement an EventEmitter
//You can create an EventEmitter
//You can register listeners to different event strings with an on method
	// myEventEmitter.on('importantEvent', function (eventDetails){
		// console.log('something important happened', eventDetails);
	// })

//These listeners get called when the created event emitter emits the event with related data
	//myEventEmitter.emit('anImportantEvent', {location: "FullStack"});

//Unregister a listener using a removeListener method
	//myEventEmitter.removeListener('prestoBango', fn);
	//Listener is no longer attached

//Overview of full functionality
// var superbowl = new EventEmitter();

// var cheer = function (data){
// 	console.log("Raaahh! Go " + data.scoringTeam);
// };

// var jeer = function (data){
// 	console.log("BOooo " + data.scoringTeam);
// };

// superbowl.on('touchdown', cheer);
// superbowl.on('touchdown', jeer);

// superbowl.emit('touchdown', {scoringTeam: 'Patriots'}); //both cheer and jeer are called with data

// superbowl.removeListener('touchdown', jeer);

// superbowl.emit('touchdown', {scoringTeam: "seahawks"}); //only cheer is called


//Solution
var EventEmitter = function (){
	this.events = {};
};

EventEmitter.prototype.on = function (eventStr, fn) {
	if(!this.events[eventStr]){
		this.events[eventStr] = [];
	}

	this.events[eventStr].push(fn);
};

EventEmitter.prototype.emit = function (eventStr, eventData) {
	if(!this.events[eventStr]){
		return;
	}

	this.events[eventStr].forEach(function (fn){
		fn(eventData);
	});
};

EventEmitter.prototype.removeListener = function (eventStr, fn){
	var eventFns = this.events[eventStr];
	
	if(!eventFns) return;
	
	var i = eventFns.indexOf(fn);
	
	if(i === -1) return;

	eventFns.splice(i, 1);
};