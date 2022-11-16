const http = require('http');
var os = require("os");
var mysql = require('promise-mysql');

const port = process.env.PORT || 80;

const server = http.createServer( async (req, res) => {
  res.statusCode = 200;
  var hostname = os.hostname();
  const msg = 'Hello Node! ' + hostname + '\n';

  var connection = await mysql.createConnection({
    host     : 'db01',
    user     : 'demo',
    password : 'demo'
  });

  await connection.query('SELECT CURDATE() + 0;');
  res.end(msg);
});





server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
