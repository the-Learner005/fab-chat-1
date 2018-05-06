const path = require('path'); //this dont need to be installed
const express = require('express');
const port = process.env.PORT || 3000;
var app = express();
const publicPath = path.join(__dirname , '../public');
//set up express static middleware that will serve up our public folder
app.use(express.static(publicPath));

// console.log(publicPath);
app.get('/',function(req,res){
    res.send('Hello Web Visitor');
});

app.listen(port,function(){
    //anything here
    console.log('Server is Up on '+ port);
});