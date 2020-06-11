const express = require('express');
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