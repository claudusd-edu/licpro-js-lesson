Promise
.all([p1, p2, p3])
.then(function(values) {
  console.log(values);
}).catch(function(value) {
  console.log(value)
})
