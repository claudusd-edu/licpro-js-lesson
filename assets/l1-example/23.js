fetch(request, {
    mode: 'no-cors',
    method: 'GET'
}).then(function(response) {
    return response.json();
}).then(function(j) {
    console.log(j)
}).catch(function(err) {
   console.log(err);
})
