/**
 * PART 0
 *
 * Have the song object have a function paramater that returns the title of the song.
 * For Example: song.sayName() would return "Space Jam".
 */

 var song = {
   title: "Space Jam",
   artist: "Quad City DJ's",
   duration: {
      minutes: 2,
      seconds: 38
   }
};
console.assert(song.sayName() === "Space Jam");


/**
 * PART 1
 *
 * This object has issues with syntax. Can you fix it so the tests pass and there
 * are no more errors?
 */
 

 var song = {
   title: "Space Jam";
   artist: Quad City DJ,
   duration: {
      minutes= 2,
      seconds: 38
   }
};
console.assert(song.title === "Space Jam");
console.assert(song.artist === "Quad City DJ");
console.assert(song.duration.minutes === 2);
console.assert(song.duration.seconds === 38);



/**
 * PART 2
 *
 * Create an switch statement within the function "switchStatement" that will
 * return "car move" when given "start", return "car stop" when given "stop" and
 * return "car redo" when given restart. If none of those are found it should return
 * false.
 */

function switchStatement(command)
{
	switch (command) {
	}
}
console.assert(switchStatement("start") === "car move");
console.assert(switchStatement("stop") === "car stop");
console.assert(switchStatement("restart") === "car redo");
console.assert(switchStatement("taco") === false);


/**
 * PART 3
 *
 * Without editing any variables or overwriting any variables make the global variable
 * myName equal "Jane";
 *  
 */


var myName = "Alex";

function sayAnotherName() {
  var myName = "Jane";
  return true;
}

console.assert(myName === 'Jane');


/**
 * PART 4
 *
 * Make the names array match the sorted array (alphabetical);
 * 
 */


var names = ['tim', 'jim','alex','zeb','george'];
var sortedArray = ['alex','george','jim','tim','zeb'];


console.assert(JSON.stringify(names) == JSON.stringify(sortedArray));


