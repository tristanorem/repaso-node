var express = require('express');
var router = express.Router();
var peliculasController=require('../controllers/peliculasController');

//creacion de pelicas
router.get('/crear',peliculasController.crear);
router.post('/crear',peliculasController.guardado)

//lectura de ruta

router.get('/',peliculasController.listado)

//detalle
router.get('/:id',peliculasController.detalle);
//actualizacion

router.get('/editar/:id',peliculasController.editar);
router.post('/editar/:id',peliculasController.actualizar);

//borrar 
router.post('/borrar/:id',peliculasController.borrar);

module.exports = router;