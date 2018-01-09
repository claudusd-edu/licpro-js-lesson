var obj = {
  myText: "Yolo",
  method: function() {
    return `Method : ${this.myText}`
  }
}
const method2 = obj.method;

console.log(method2());
