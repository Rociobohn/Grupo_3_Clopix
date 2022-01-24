const req = require('express/lib/request');
const archivosJson=require('../model/controlDatos');
let usuarios=archivosJson('Usuarios');
const { body, validationResult } = require('express-validator');

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
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        let nuevo={
            id:1,
            avatar:"/images/avatar/"+req.file.getfilename,
            nombreCompleto:req.body.nombreCompleto,
            mail:req.body.mail,
            usuario:req.body.usuario,
            pasword:req.body.pasword,
            celular:req.body.celular
            
            
        }
        


        usuarios.create(nuevo);
        res.redirect("/");
    },
    logear:(req,res)=>{
        res.send("Logeado con exito!!!!!!");
    }
    
}

module.exports=user;