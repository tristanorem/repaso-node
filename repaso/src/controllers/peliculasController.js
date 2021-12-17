const db=require('../database/models');

const peliculasController={
    crear:function(req,res){
        db.Genero.findAll()
            .then(function(genres){
                return res.render("creacionPeliculas", {genres:genres})
            })
    },
    guardado:function(req,res){
        db.Pelicula.create({
            title:req.body.titulo,
            awards:req.body.premios,
            release_date:req.body.fecha_estreno,
            genre_id:req.body.genero,
            length:req.body.duracion,
            rating:req.body.rating
        });
        res.redirect('/peliculas');
    },
    listado:function(req,res){
        db.Pelicula.findAll()
            .then(function(peliculas){
                res.render("listadoPeliculas",{peliculas:peliculas})
            })
    },
    detalle:function(req,res){
        db.Pelicula.findByPk(req.params.id,{
            include:[{association:"genres"},{association:"actors"}]
        })
            .then(function(pelicula){
                res.render("detallePelicula",{pelicula:pelicula})
            })
    },
    editar:function(req,res){
        let pedidoPelicula =db.Pelicula.findByPk(req.params.id);

        let pedidoGeneros=db.Genero.findAll();

        Promise.all([pedidoPelicula,pedidoGeneros])
            .then(function([pelicula,genres]){
                res.render("editarPelicula",{pelicula:pelicula ,genres:genres})
            })
            
            /*editar:function(req,res){
        db.Pelicula.findByPk(req.params.id)
            .then(function(pelicula,genres){
                res.render("editarPelicula",{pelicula},{genres})
            })*/
    },
    actualizar:function(req,res){
        db.Pelicula.update({
            title:req.body.titulo,
            awards:req.body.premios,
            release_date:req.body.fecha_estreno,
            genre_id:req.body.genero,
            length:req.body.duracion,
            rating:req.body.rating
        },{
         where:{
             id:req.params.id
         }  
        });
        res.redirect("/peliculas/" + req.params.id)
    },
    borrar:function(req,res){
        db.Pelicula.destroy({
            where:{
                id:req.params.id
            }
        })
        res.redirect("/peliculas");
    }
}
module.exports=peliculasController;