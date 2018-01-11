// JavaScript basics

//input/output, variable, datatypes
//conditional
//loops
//functions
//arrays 
//objects(JSON)

//variables
var a = "hello";
var b = 5.5;
d = b + 1;

//Output
//document- entire document
document.write("hello");
document.write(" world");
//console - for debugging
console.log("world");
//prompt
// name = prompt("enter your name:");
//alert
// alert("Game  Over " + name);

//functions
fun();// due to function hoisting -- all functions move to tht top of code
function fun(){
    console.log("fun function called.");
}

fun();

// funtoo();
//hoisting not applied here
var apple = 10;

var funtoo = function(){
    apple = 50;//global
    console.log("funtoo called.");
    return 5;
}

console.log(apple);

// loops and arrays

arr = ["apple", "mango", "guava", 10, 20 ,30];
console.log(arr);

for(var i = 0;i<arr.length;i++){
    console.log((i+1) + " = " + arr[i]);
}
//foreach loop
arr.forEach(function(fruit, i){
    console.log(i + " - " + fruit);
})

// operations on arrays

// push at end of array
// pop -- remove from end
// Unshift  -- Adds to front
// Shift -- removes from front
// Linear search -- indexof()

if(5>3){
    console.log("yes");
}
else{
    console.log("no");
}

// fetch the div from html
myDiv = document.getElementById('mydiv');
console.log(myDiv);

function mousePressed(someInfo){
    console.log("You pressed the mouse");
    console.log(someInfo.clientX + " , " + someInfo.clientY);
}

// listem for mouse click on our div
myDiv.addEventListener('mousedown',mousePressed)
//mouseup, keypressed, keydown, keyup

//JSON javascript object notation
var bird = {
  x : 10,
  y : 30,
  color : "green",
  eggs : [1, 2, 3, 4, 5],
  fly: function(){
      console.log("Up up and away!");
      console.log(this.x);// only x gives no output-- use- this.x
  }
};