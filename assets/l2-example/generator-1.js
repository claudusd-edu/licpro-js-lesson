function* subGen() {
  yield 2;
}

function* gen() {
  yield 1;
  yield* subGen();
  yield 3;
}

for (var val of gen()) {
 console.log(val);
}
