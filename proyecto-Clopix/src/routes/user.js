const express = require('express');
const path=require('path');
const multer  = require('multer');
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
userRoute.get('/register',userController.registro);
userRoute.get('/editUser',userController.edit);
userRoute.post('/Alta', upload.single('avatar'), userController.crear)
userRoute.delete('/:id/Baja')
userRoute.put('/:id/editar')




module.exports=userRoute;
