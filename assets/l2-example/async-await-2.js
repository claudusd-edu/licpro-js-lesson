function wait() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('B'), 2000);
  });
}

async function main() {
  console.log('A');
  const letter = await wait();
  console.log(letter);
  console.log('C');
}

main();
