'use strict';

//Classic OOP
var Rectangle = function (length, width) {
  this.length = length;
  this.width  = width;

  //Methods defined internally
  this.calcArea = function() {
      return this.length * this.width;
  };
};

var Square =  function (length) {
  this.length = length;
  this.width  = length;
};

//For Inheriting all methods
Square.prototype =  new Rectangle();
//OR
Square.prototype =  Object.create(Rectangle.prototype);

//Creating instance of Square
var mySquare = new Square(2);
console.log(mySquare.calcArea());

//Result:
4

//Modular Inheritance
//Base.js
function Base() {}
Base.prototype.print = function() {
  Console.log('Printing.');
};

module.exports = Base;


//User.js
var util = require('util');
var Base = require('relative/or/absolute/path/to/Base');

function User() {}


util.inherits(User, Base);
module.exports = User;


User.prototype.display = function() {
  Console.log('Displaying.');
};


var User    = require('relative/or/absolute/path/to/User');
var userObj = new User();

userObj.print();   //Printing.
userObj.display();   //Displaying.'


