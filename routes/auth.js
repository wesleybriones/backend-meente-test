/**
 * Rutas de usuario / Auth
 * host + /api/auth
 */
const express = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = express.Router();

router.post(
    '/new', 
    [//middlewares
        check('identification', 'La identificación es obligatoria').not().isEmpty().isLength({ min:10 }),
        check('names', 'El nombre es obligatorio').not().isEmpty(),
        check('surnames', 'El apellido es obligatorio').not().isEmpty(),
        check('genre', 'El genero es obligatorio').not().isEmpty(),
        check('state', 'El estado es obligatorio').not().isEmpty(),
        check('phone', 'El número de teléfono es obligatorio').not().isEmpty(),
        check('direction', 'La dirección es obligatoria').not().isEmpty(),
        check('city', 'La ciudad es obligatoria').not().isEmpty(),
        check('mail', 'El correo es obligatorio').isEmail(),
        check('user', 'El usuario es obligatorio').not().isEmpty(),
        check('password', 'La contraseña debe tener mínimo 6 caracteres').isLength({ min:6 }),
        validarCampos
    ],
    crearUsuario);

router.post(
    '/', 
    [
        check('user', 'El usuario es obligatorio').not().isEmpty(),
        check('password', 'La contraseña debe tener mínimo 6 caracteres').isLength({ min:6 }),
        validarCampos
    ],
    loginUsuario);

router.get('/renew', validarJWT, revalidarToken);


module.exports = router;
