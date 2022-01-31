const req = require('express/lib/request');
const archivosJson=require('../model/controlDatos');
let usuarios=archivosJson('Usuarios');
const bycript=require('bcryptjs');
const { validationResult } = require('express-validator');


const user={
    login:(req, res)=>{
        res.render('Users/login');
    },
    registro:(req, res)=>{
        res.render('Users/register');
    },
    edit:(req,res)=>{
        /*lo que va a hacer*/
    },
    crear:(req,res)=>{
        const errors = validationResult(req);
        let passEncrip=bycript.hashSync(req.body.pasword,3);
        console.log("estos son los errores!!!!!!!!!!!!!!!!!");
        console.log(errors);
        if (!errors.isEmpty()) {
          return res.render('Users/register',{errors: errors.mapped(),old:req.body});
        }
        if(!bycript.compareSync(req.body.passwordConfirm, passEncrip)){
            console.log("las contraseñas no coinciden");
            return res.render("Users/register",{ errors: { passwordConfirm: { msg:"error, las contraseñas no coinciden"}}});
        }
        if(usuarios.findByAll('user',req.body.user)!=undefined){
            return res.render("Users/register",{ errors: { user: { msg:"error, el usuario ya esta en uso"}}});
        }
        if(usuarios.findByAll('mail',req.body.mail)!=undefined){
            console.log("el mail ya esta en uso");
            todoOk=false;
        }
            let nuevo={
                id:1,
                avatar:req.file.filename,
                nombreCompleto:req.body.nombreCompleto,
                mail:req.body.mail,
                user:req.body.user,
                pasword:passEncrip,
                celular:req.body.celular

            }
            usuarios.create(nuevo);
            res.redirect("/");
        
        res.redirect("Users/register");
        
    },
    logear:(req,res)=>{
        let us=usuarios.findByAll("user",req.body.user);
        console.log(us);
        if(us!=undefined && bycript.compareSync(req.body.password,us.pasword)){
            req.session.usuarioLogeado=req.body.user;
            req.session.paswordSave=req.body.password;
            return res.redirect("/user/"+us.user+"/perfil");
        }
        else{
             res.redirect("/user/login");
        }
        
        
    }, 
    perfil:(req,res) => { 
        if(req.session.usuarioLogeado!=undefined && req.session.paswordSave!=undefined){
            console.log("hay info en session");
            let us=usuarios.findByAll("user",req.session.usuarioLogeado);
            if(us!=undefined && bycript.compareSync(req.session.paswordSave,us.pasword)){
                res.render('Users/perfil',{usuario: us});
            }
        }
        res.redirect("/User/login");
    }
    
}

module.exports=user;