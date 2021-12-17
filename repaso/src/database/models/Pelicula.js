module.exports=function(sequelize,DataTypes){
    const alias='Pelicula';

    const cols={
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        title:DataTypes.STRING,
        rating:DataTypes.DOUBLE,
        awards:DataTypes.INTEGER,
        release_date:DataTypes.DATE,
        length:DataTypes.INTEGER,
        genre_id:DataTypes.INTEGER
    }
const config={
   tableName:"movies",
    timestamps:false
 }  
    const Pelicula=sequelize.define(alias,cols,config);
        Pelicula.associate=function(models){
        Pelicula.belongsTo(models.Genero, {
            as:"genres",
            foreignKey:"genre_id"
        });
            Pelicula.belongsToMany(models.Actor, {
                as:"actors",
                through:"actor_movie",
                foreignKey:"movie_id",
                otherKey:"actor_id",
                timestamps:false
            })
    }
    return Pelicula;
}
