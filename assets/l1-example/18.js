let a = function(i, show) {
  const val = i*2;
  show(val)
}

a(2, function(val) {
  console.log(`Val : ${val}`);
})
