const home={

    mostrar:(req, res)=>{
        res.render('index');
    },

    notFound: (req, res)=> {
        res.render('404');
    }
    
}
module.exports=home;