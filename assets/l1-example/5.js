if (typeof a === "undefined") {
    // a is undefined
} else if (a instanceof Number) {
    // a is a Number
} else {
    throw new Error('Hey, you missed the contract !')
}
