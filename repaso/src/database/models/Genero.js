module.exports=function(sequelize,dataTypes){
    const alias='Genero';

    const cols={
        id:{
            type:dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:dataTypes.STRING,
            allowNull:null 
        },
    }
const config={
   tableName:"genres",
    timestamps:false
 }  
    const Genero=sequelize.define(alias,cols,config);
    Genero.associate=function(models){
        Genero.hasMany(models.Pelicula, {
            as:"peliculas",
            foreignKey:"genre_id"
        })
    }
    return Genero;
}