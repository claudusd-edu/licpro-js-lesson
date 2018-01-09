var foo = "outside";
function test() {
    foo = "inside";
    console.log('test foo is "%s"', foo);
}

test();
