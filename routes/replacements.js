/**
 * Rutas de respuestos
 * api/replacements
 */
const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getReplacementById, createReplacement, updateReplacement, deleteReplacement, getReplacementsBySolution } = require('../controllers/replacements');

const router = Router();

router.use( validarJWT );

router.get('/', getReplacementsBySolution );


router.get('/:id', getReplacementById );


router.post('/', createReplacement );


router.put('/:id', updateReplacement );


router.delete('/:id', deleteReplacement );


module.exports = router;