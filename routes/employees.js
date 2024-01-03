/**
 * Rutas de los empleados
 * api/employees
 */
const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getEmployees, getEmployeesById } = require('../controllers/employees');

const router = Router();

router.use( validarJWT )

router.get('/', getEmployees );


router.get('/:id', getEmployeesById );



module.exports = router;