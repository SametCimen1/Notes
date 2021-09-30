const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('client'))

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'client/index.html'))
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>{
    console.log(`Listening on  ${PORT}`)
})