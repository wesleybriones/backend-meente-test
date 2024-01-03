/**
 * Rutas de equipo
 * api/devices
 */
const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { createDevice, getDevices, updateDevice, deleteDevice, getDeviceBySerie } = require('../controllers/device');

const router = Router();

router.use( validarJWT );

router.get('/', getDevices );


router.get('/:id', getDeviceBySerie );


router.post('/', createDevice );


router.put('/:id', updateDevice );


module.exports = router;