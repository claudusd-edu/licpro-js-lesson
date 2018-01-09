Dog.prototype = new Animal();

Dog.Dog.prototype.speak = function() {
    console.log(this.name + ' barks.');
}
