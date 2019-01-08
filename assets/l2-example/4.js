const http = require("http");
http.createServer(function(request, response) {
    response.write('Coucou');
    response.end();
}).listen(9999);
