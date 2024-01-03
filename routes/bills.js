/**
 * Rutas de reportes
 * api/reports
 */
const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getBills, getBillById, createBill, updateBill, deleteBill } = require('../controllers/bills');

const router = Router();

router.get('/', validarJWT, getBills );


router.get('/:id', validarJWT, getBillById );


router.post('/', validarJWT, createBill );


router.put('/:id', validarJWT, updateBill );


router.delete('/:id', validarJWT, deleteBill );


module.exports = router;