//Classic OOP
var Rectangle = function (length, width) {
  this.length = length;
  this.width  = width;

  //Methods defined internally
  this.calcArea = function() {
      return this.length * this.width;
  };
}

var Square =  function (length) {
  this.length = length;
  this.width  = length;
}

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
function Base() { /* ... */ }
Base.prototype.print = { /* ... */ }
module.exports = Base;


//User.js
var Base = require('relative/or/absolute/path/to/Base');

function User() {
    Base.super_.apply(this, arguments);
}

User.super_    = Base;
User.prototype = Object.create(Base.prototype, {
    constructor: {
        value      : User,
        enumarable : false
    }
});

//OR
var util = require('util');
util.inherits(User, Base);


User.prototype.display = { /* ... */ }
module.exports = User;