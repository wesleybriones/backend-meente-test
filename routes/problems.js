/**
 * Rutas de problemas
 * api/problems
 */
const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { deleteProblem, getProblemById, getProblems, createProblem, updateProblem } = require('../controllers/problems');

const router = Router();

router.get('/', validarJWT, getProblems );


router.get('/:id', validarJWT, getProblemById );


router.post('/', validarJWT, createProblem );


router.put('/:id', validarJWT, updateProblem );


router.delete('/:id', validarJWT, deleteProblem );


module.exports = router;