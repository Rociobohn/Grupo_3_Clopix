const db=require('../../database/models');

const api={

    informe:(req,res) => { 
        let objetoliteral = { 
            count:1,
            countByCategory:{ 

            }, 

            products: [ 
               
            ]


        }

        db.Producto.findAll({ include:[{association:"talles"}]}).then(resultado => { 

            objetoliteral.count=resultado.length;
            objetoliteral.products=resultado;
        })
        db.talle.findAll({include:"Talle"}).then(resultado => { 
           console.log(resultado);
           console.log(resultado.talle.length);
        })
    }
    
}


module.exports=api;