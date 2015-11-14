#NodeJS Tricks
Bringing all the helpful tricks from the different websites, talks, tweets etc                   in one place. Just fork and contribute this one.


##Table of Contents
- [Inheritance](#inheritance)


##Tricks
###Inheritance
```javascript
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
```
[View Source](inheritance.js)

##Contributing

1. Fork it
1. Create your trick branch: `git checkout -b my-js-trick
1. Add your trick to the collection of `.js` files
1. Regenerate `README.md`: `gulp build` (Install dependencies: npm install)
1. Commit your changes: `git commit -am 'Add trick'`
1. Push to the branch: `git push origin my-js-trick`
1. Create new Pull Request and explain why your code is trick