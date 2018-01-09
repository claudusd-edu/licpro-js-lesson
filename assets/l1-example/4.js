var foo = "outside";
function test() {
    var foo = "inside";
    console.log('test foo is "%s"', foo);
}

test();

console.log('fos is "%s"', foo);
