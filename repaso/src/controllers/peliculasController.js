const db=require('../database/models');

const peliculasController={
    crear:function (req,res){
        db.Genero.Genero.findAll()
            .then(function(generos){
               return  res.render('listadoPeliculas',{generos:generos})
            })

    }


}
module.exports=peliculasController;