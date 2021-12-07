const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen (process.env.PORT ||3001, ()=>{
    console.log('Servidor funcionando bien');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/src/views/index.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/src/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/src/views/register.html');
});
app.get('/productCart', (req,res)=>{
    res.sendFile(__dirname + '/src/views/productCart.html');
});
app.get('/Catalogo', (req,res)=>{
    res.sendFile(__dirname + '/src/views/productDetail.html');
});

app.get('/login2', (req,res)=>{
    res.sendFile(__dirname + '/src/views/login2.html');
});

