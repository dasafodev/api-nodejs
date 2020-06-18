const express = require('express');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
const dbUrl = process.env.BD_URL;

MongoClient.connect(dbUrl,{
    useUnifiedTopology:true
},(err,database)=>{
    if(err){
        return console.log('Error',err);
    }else{
        console.log('Conexion con exito');
    }
});


const app = express();

app.get('/', (request,response) => {

        response.send('¡Hola mundo!');
});

app.get('/quotes', (req, res) => {
    res.json({data:'ok get'})
});

app.post('/quotes', (req, res) => {
    res.json({data:'ok post'})
});


app.put('/quotes', (req, res) => {
    res.json({data:'ok put'})
});


app.delete('/quotes', (req, res) => {
    res.json({data:'ok delete'})
});




app.listen(8000,()=>{
    console.log('Servidor funcionando en http://localhost:8000/')
} )