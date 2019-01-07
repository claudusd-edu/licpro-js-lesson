const obj = {
  myText: "Yolo",
  method: function() {
    return `Method : ${this.myText}`
  }
}
let method2 = obj.method;
method2();
