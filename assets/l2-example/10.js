var body =  '';
request.on('data', function (data) {
    body += data;
});
request.on('end', function () {
   console.log(body);
})
