const userTest={
    logged:(req, res,next )=>{
        if(req.session.userLoded){
            return res.redirect('/user/'+req.session.userLoded.user+'/profile');
        }
        next();
    },
    unLogged:(req, res,next )=>{
        if(req.session.userLoded){
            return res.redirect('/user/'+req.session.userLoded.user+'/profile');
        }
        next();
    }
}

module.exports=userTest;