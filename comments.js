// Create web server
// Run: node comments.js
// Output: http://localhost:3000
// Test: curl -X POST -d "comment=Hello" http://localhost:3000
// Test: curl http://localhost:3000

var http = require('http');
var items = [];
var server = http.createServer(function(req, res){
  if('/' == req.url){
    switch(req.method){
      case 'POST':
        var item = '';
        req.setEncoding('utf8');
        req.on('data', function(chunk){
          item += chunk;
        });
        req.on('end', function(){
          items.push(item);
          res.end('OK\n');
        });
        break;
      case 'GET':
        var body = items.map(function(item, i){
          return i + ') ' + item;
        }).join('\n');
        res.setHeader('Content-Length', Buffer.byteLength(body));
        res.setHeader('Content-Type', 'text/plain; charset="utf-8"');
        res.end(body);
        break;
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});
server.listen(3000);