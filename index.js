const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
// const port = import.meta.PORT || 3000;
const port =  3000;

//middlewares
app.use(cors())

app.get('/', (req, res) =>{
    res.send('Online group study server is running')
});

app.listen(port, ()=>{console.log(`Port is running on, ${port}`)})