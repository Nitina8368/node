let http = require('http');
let fs = require('fs');

let server = http.createServer((req,res) => {
    fs.readFile('db.json','utf-8',(err,data) => {
        if(err) throw err;
        res.write(data);
        res.end()
    })
})
    
server.listen(1206,() => {
        console.log('Server Running on port 1206, global dependencies...')
})
