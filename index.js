var http = require('http');
var fs = require('fs');

/*var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Hosomichi!\n');
}).listen(5858, '127.0.0.1');*/
var server = http.createServer().listen(5858, '127.0.0.1');

server.on('request', function (req, res) {
  var filePath = 'view/search-1.html';
  if (req.url !== '/') {
    filePath = req.url;
  }

  console.log(filePath);

  fs.readFile('./' + filePath, 'utf-8', function (err, data) {
    if (err) {　//err=trueならNot Foundを返します。
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.write("Not Found");
      return res.end();
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
  });
});
