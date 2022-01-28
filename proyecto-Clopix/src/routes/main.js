const express=require('express');
const home=require('../controllers/mainController');
const rutas=express.Router();
rutas.get('/', home.mostrar);
rutas.get('/404', home.notFound);
module.exports=rutas;