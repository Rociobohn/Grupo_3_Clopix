const express = require('express');
const path=require('path');
const multer  = require('multer');
const { body, validationResult } = require('express-validator');
const userController= require('../controllers/userController');
const { Console } = require('console');
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
userRoute.post('/Alta', body("username")
.isLength({ min: 4 })
.withMessage("el nombre de usuario debe tener al menos 4 caracteres de largo")
.isLength({ max: 12 })
.withMessage("el nombre de usuario debe tener menos de 12 caracteres")
.exists()
.withMessage("Se requiere nombre de usuario")
.trim()
.matches(/^[A-Za-z0-9\_]+$/)
.withMessage("el nombre de usuario debe ser solo alfanumérico")
.escape(),
body("email")
.isEmail()
.normalizeEmail()
.withMessage("Invalid Email")
.exists(),
body("password")
.isLength({ min: 5 })
.withMessage("la contraseña debe tener al menos 5 caracteres")
.isLength({ max: 30 })
.withMessage("la contraseña debe tener un máximo de 30 caracteres")
.matches(/\d/)
.withMessage("la contraseña debe contener un número")
.exists(), upload.single('avatar'), userController.crear)
userRoute.delete('/:id/Baja')
userRoute.put('/:id/editar')
userRoute.get('/register',userController.registro);








module.exports=userRoute;
