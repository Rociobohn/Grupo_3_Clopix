const req = require('express/lib/request');
const gArchivoJson=require('../model/jsonDataBase');
let vProductos=gArchivoJson('product');
let Detalle=gArchivoJson('listaComprasTest');
const producto={
    alta:(req, res)=>{
        res.render('Products/AltaProducto.ejs');
    },
    baja:(req, res)=>{
        /** lo que va hacer */
    },
    edit:(req, res)=>{
        res.render('Products/ModificarProducto');
    },
    Catalogo:(req, res)=>{
        res.render('Products/productDetail',{producto:vProductos.readFile()});
    },
    
    Detalle:(req, res)=>{
        let ins=req.params.id;
        res.render('Products/unProducto',{ unP :vProductos.find(ins)});
    },
    Carrito:(req, res)=>{
        res.render('Products/CarritoCompras',{ DetalleCompra: Detalle.readFile()});
    }
    
}
module.exports=producto;