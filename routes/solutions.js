/**
 * Rutas de reportes
 * api/reports
 */
const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getSolutions, getSolutionById, createSolution, updateSolution, deleteSolution } = require('../controllers/solutions');

const router = Router();

router.get('/', validarJWT, getSolutions );


router.get('/:id', validarJWT, getSolutionById );


router.post('/', validarJWT, createSolution );


router.put('/:id', validarJWT, updateSolution );


router.delete('/:id', validarJWT, deleteSolution );


module.exports = router;