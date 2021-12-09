const producto={
    alta:(req, res)=>{
        /** lo que va hacer */
    },
    baja:(req, res)=>{
        /** lo que va hacer */
    },
    edit:(req, res)=>{
        /** lo que va hacer */
    },
    Catalogo:(req, res)=>{
        res.render('productDetail');
    },
    Carrito:(req, res)=>{
        res.render('CarritoCompras');
    }
    
}
module.exports=producto;