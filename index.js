const express = require ('express');

const app = express();
//METHODS of HTTP
// GET(read),POST(create),PUT(Updte),DELETE(delete)

app.get('/',(req,res) => {
    res.send("Hello Express.js World");
})

app.get('/profile',(req,res) => {
    res.send("Hello Express.js profile world");
}

app.listen(3000,() => {
    console.log ("our First Express App is running at localhost:3000")
})