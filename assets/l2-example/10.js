const http = require("http");
http.createServer(function(request, response) {
  let body =  '';
  request.on('data', function (data) {
      body += data;
  });
  request.on('end', function () {
     console.log(body);
  })
  response.end();
}).listen(9999);
