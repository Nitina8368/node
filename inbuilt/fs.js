let fs = require('fs');

// fs.appendFile('mycode.txt',`\n${Math.floor(Math.random()*1000)} Some math function`,() => {
//     console.log('Done with function')
// })

// fs.readFile('db.json','utf-8',(err,data) => {
//     if(err) throw err
//     console.log(data);
// })

// fs.rename('mycode.txt','code.txt',(err) => {
//     if(err) throw err
//     console.log('File Renamed');
// } )

fs.unlink('code.txt',(err) => {
    if(err) throw err
    console.log('File Unlinked');
})

