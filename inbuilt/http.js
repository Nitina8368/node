let http = require('http');

let server = http.createServer((req,res) => {
    res.write('<h1>My First Node Server</h1>');
    res.end()
})

server.listen(8368);