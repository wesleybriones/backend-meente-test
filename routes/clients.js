/**
 * Rutas de clientes
 * api/clients
 */
const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getClients, getClientById, createClient, updateClient, deleteClient } = require('../controllers/clients');


const router = Router();

router.use( validarJWT )

router.get('/', getClients );


router.get('/:id', getClientById );


router.post('/', createClient );


router.put('/:id', updateClient );


router.delete('/:id', deleteClient );


module.exports = router;