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
        res.render('Products/productDetail');
    },
    Carrito:(req, res)=>{
        res.render('Products/CarritoCompras');
    }
    
}
module.exports=producto;