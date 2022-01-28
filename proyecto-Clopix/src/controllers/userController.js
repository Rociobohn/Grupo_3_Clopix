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
        let todoOk=true;
        if (!errors.isEmpty()) {
          res.render('Users/register',{menssajeErros: errors.mapped(),old:req.body});
          todoOk=false;
        }
        if(todoOk && !bycript.compareSync(req.body.pasword, bycript.hashSync(req.body.passwordConfirm))){
            console.log("las contraseñas no coinciden");
            todoOk=false;
        }
        if(todoOk && usuarios.findByAll('usuario',req.body.user)!=undefined){
            console.log("el  usuario ya esta en uso");
            todoOk=false;
        }
        if(todoOk && usuarios.findByAll('mail',req.body.mail)!=undefined){
            console.log("el mail ya esta en uso");
            todoOk=false;
        }
        if(todoOk){
            let passEncrip=bycript.hashSync(req.body.pasword,3);
            let nuevo={
                id:1,
                avatar:"/images/avatar/"+req.file.getfilename,
                nombreCompleto:req.body.nombreCompleto,
                mail:req.body.mail,
                usuario:req.body.usuario,
                pasword:passEncrip,
                celular:req.body.celular

            }
            usuarios.create(nuevo);
            res.redirect("/");
        }
        res.redirect("/User/register");
        
    },
    logear:(req,res)=>{
        res.send("Logeado con exito!!!!!!");
    }, 
    perfil:(req,res) => { 
        res.render('Users/perfil');
    }
    
}

module.exports=user;