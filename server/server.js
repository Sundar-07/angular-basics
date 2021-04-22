const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.get('/',function(req,res){
    res.send("From server");
});

app.post('/addmaster',function(req,res){
    console.log(req.body);
    res.status(200).send({"message":"Data Received"});
})

app.listen(PORT,function(){
    console.log(`Server is running on ${PORT}`);
});