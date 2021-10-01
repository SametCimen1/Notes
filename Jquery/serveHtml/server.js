const express = require('express');
const app = express();
const path = require('path');
var cors = require('cors')
app.use(express.static('client'))

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'client/index.html'))
})
const corsOptions ={
    origin:'http:localhost:5000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
  }
app.use(cors(corsOptions))
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http:localhost:5000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
}) 

app.get('/data', (req,res) => {
res.send('hello');
})
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>{
    console.log(`Listening on  ${PORT}`)
})