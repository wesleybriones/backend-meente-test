/**
 * Rutas de reportes
 * api/reports
 */
const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');

const { getReports, 
    createReport, 
    updateReports, 
    deleteReport, 
    getReportById 
} = require('../controllers/reports');

const router = Router();

router.get('/', validarJWT, getReports );


router.get('/:id', validarJWT, getReportById );


router.post('/', validarJWT, createReport );


router.put('/:id', validarJWT, updateReports );


router.delete('/:id', validarJWT, deleteReport );


module.exports = router;