function wait() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('B'), 2000);
  });
}

console.log('A');
wait().then(letter => console.log(letter));
console.log('C');
