const req = require('express/lib/request');
const gArchivoJson=require('../model/jsonDataBase');
let vProductos=gArchivoJson('product');
let Detalle=gArchivoJson('listaComprasTest');
const producto={
    alta:(req, res)=>{
        res.render('Products/AltaProducto.ejs');
    },
    eliminarDelCarrito:(req, res)=>{
       let ins=req.params.id;
       Detalle.delete(ins);
       res.redirect('/Producto/Carrito');
    },
    baja:(req,res)=>{
        let ins= req.params.id;
        vProductos.delete(ins);
        res.redirect('/Producto');
    },
    edit:(req, res)=>{
        res.render('Products/ModificarProducto');
    },
    Catalogo:(req, res)=>{
        res.render('Products/productDetail',{producto:vProductos.readFile()});
    },
    
    Detalle:(req, res)=>{
        let ins=req.params.id;
        let recuperado=vProductos.find(ins);
        res.render('Products/unProducto',{ unP: recuperado });
    },
    Carrito:(req, res)=>{
        res.render('Products/CarritoCompras',{ DetalleCompra: Detalle.readFile()});
    },
    CrearProducto:(req,res)=>{
        let nuevo= {
            id : null,
            nombre: req.body.nombre,
            image: "/images/product/"+req.file.filename,
            descripcion: req.body.descripcion,
            talle: req.body.talle, 
            precio: req.body.precio,
            unidades: req.body.unidades
        }
        vProductos.create(nuevo);
        res.redirect('/Producto/');
    }
    
}
module.exports=producto;