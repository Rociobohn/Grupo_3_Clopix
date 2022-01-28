const express = require('express');
const path=require('path');
const multer  = require('multer');
const { body } = require('express-validator');
const userController= require('../controllers/userController');


let validationUser=[
   body('nombreCompleto').notEmpty().isLength({min:3}).withMessage("El nombre indicado no es valido").bail(),
   body('mail').notEmpty().isEmail().withMessage("el mail indicado no es valido").bail(),
   body('usuario').isLength({min:3}).withMessage("el usuario no es valido").bail(),
   body('celular').isLength({min:8 ,max:8}).withMessage("numero no valido").bail(),
   body('pasword').notEmpty().isLength({min:8}).withMessage("password invalido").equals(body('passwordConfirm')).bail(),
   body('pasword').notEmpty().isLength({min:8}).equals(body('pasword')).withMessage("las contraseñas no coinciden").bail(),
   body('terminosyCondiciones').notEmpty().withMessage("Campo Obligatorio").bail()
]

const userRoute= express.Router();


const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, './public/images/avatar'); 
    }, 
    filename: function (req, file, cb){ 
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  
      } 
  });

  const upload = multer({ storage });

console.log(storage)

userRoute.get('/login',userController.login);
userRoute.get('/editUser',userController.edit);
userRoute.post('/Alta', validationUser, upload.single('avatar'), userController.crear);
userRoute.delete('/:id/Baja');
userRoute.put('/:id/editar');
userRoute.get('/register',userController.registro);

userRoute.get('/perfil',userController.perfil);







module.exports=userRoute;
