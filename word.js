// Requiring our CastMember constructor function we exported from castMember.js
var Letter = require("./letter");

// Constructor function for creating Movie objects
var Word = function() {
  // this.cast will hold all of our CastMember objects


  // This method that creates a CastMember object from the constructor function we required and pushes it to the `this.cast` array
  this.addCastMember = function(gender, name, role) {
    this.cast.push(new CastMember(gender, name, role));
  };
};

// Exporting the Movie constructor which we will use in main.js
module.exports = Movie;
