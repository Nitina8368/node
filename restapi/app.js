let express = require('express');
let app = express();
let dotenv = require('dotenv');
dotenv.config()
let port = process.env.PORT || 9880;
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let mongoUrl = process.env.MonogUrl;
let db;

let authkey = "b66be5ebfb61574c469c6a751894fff0";

app.get('/', (req,res) => {
    res.send("Express server Route default, Home Page...");
})

app.get('/cloths', (req,res) => {
    // res.send("Express server Route 1");
    let key = req.query.key;
    if (authkey === key){
        db.collection('cloths').find().toArray((err,result) => {
            if(err) throw err;
            res.send(result);
        })
    }
    else{
        res.send("Unauthorized access")
    }
    
})

app.get('/route2', (req,res) => {
    res.send("Express server Route 2");
})

// Connection with db connection
MongoClient.connect(mongoUrl,(err,client) => {
    if(err) console.log("Error While Connecting");
    db = client.db('firstcry');
    app.listen(port, (err) => {
        if(err) throw err;
        console.log(`Express server listening on port ${port}`)
    })

    
})
