class Dog extends Animal {
  speak() {
    console.log(this.name + ' barks.');
  }
}

const php = new Dog('Zend');
php.speak();
