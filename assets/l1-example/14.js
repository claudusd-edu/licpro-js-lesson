var obj = {
  myText: "Yolo",
  method: function() {
    return `Method : ${this.myText}`
  }
}
console.log(obj.method());
console.log(obj.myText);
