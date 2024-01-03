/**
 * Rutas de servicio externo
 * api/externalServices
 */
const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getExternalServices, getExternalServiceById, createExternalService, updateExternalService, deleteExternalService } = require('../controllers/externalServices');

const router = Router();

router.get('/', validarJWT, getExternalServices );


router.get('/:id', validarJWT, getExternalServiceById );


router.post('/', validarJWT, createExternalService );


router.put('/:id', validarJWT, updateExternalService );


router.delete('/:id', validarJWT, deleteExternalService );


module.exports = router;