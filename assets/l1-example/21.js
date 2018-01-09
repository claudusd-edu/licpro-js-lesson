p1.then(function(s) {
    console.log(s);
    return s.other;
}).catch(function(e) {
    console.log(e);
})
