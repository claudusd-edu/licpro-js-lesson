const url = require('url');
const parsedUrl = url.parse('http://localhost:9999/gazouilli/6?comment=true');
console.log(parsedUrl.pathname)
console.log(parsedUrl.port)
console.log(parsedUrl.hostname)
console.log(parsedUrl.query)
