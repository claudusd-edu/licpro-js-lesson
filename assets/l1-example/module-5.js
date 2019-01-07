//include.js
function a () {}
exports.a = a
exports.b = function () {}
//main.js
const { a as z, b } = require('./include');
