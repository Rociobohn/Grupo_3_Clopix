const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const productoCtrl= require('../controllers/productoCrl');
const routers= express.Router();

routers.get('/Carrito',productoCtrl.Carrito);
routers.delete('/Carrito/:id/eliminar', productoCtrl.baja);     
//routers.post('/Carrito/:id/eliminar', (req,res)=>{ res.send(req.params.id)});                                                                                                                                                                                                                                                              

routers.get('/',productoCtrl.Catalogo); ///listar productos
routers.get('/Create',productoCtrl.alta); //form de creacion de productos
routers.get('/:id',productoCtrl.Detalle); ///detalle de un producto en particular
//routers.post('/',);  ///accion de creacion (donde se envia los formularios)
routers.get('/:id/edit',productoCtrl.edit); /// form de edicion de productos
routers.put('/:id',); ///accion de edicion(donde se envia el formulario)
routers.delete('/:id'); ///accion de borrado



module.exports=routers;
