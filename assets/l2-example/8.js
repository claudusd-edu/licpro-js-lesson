var url = require('url');
var parsedUrl = url.parse(request.url, true);
var queryAsObject = parsedUrl.query;
console.log(queryAsObject.id)
