const obj1 = {name: "A"};
const obj2 = {name: "B"};
function method() {
  console.log(this.name);
}
method();
const method1 = method.bind(obj1);
method1();
const method2 = method.bind(obj2);
method2();
