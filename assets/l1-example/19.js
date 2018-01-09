var obj = {
  myText: "Yolo",
}
const method2 = function() {
    return `Method : ${this.myText}`
};
const method3 = method2.bind(obj);
console.log(method3());
