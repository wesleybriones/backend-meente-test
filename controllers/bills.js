const { response } = require('express');

const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize); 


/*
*   Obtener facturas
*/
const getBills = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'get reportes'
    })
}

/*
*   Obtener factura por Id
*/
const getBillById = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'get reporte by id'
    })
}

/*
*   Crear Factura
*/
const createBill = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'reporte creado'
    })
}

/*
*   Actualizar factura
*/
const updateBill = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'reporte actualizado'
    })
}

/*
*   Eliminar facturas
*/
const deleteBill = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'reporte eliminado'
    })
}
module.exports = {
    getBills,
    getBillById,
    createBill,
    updateBill,
    deleteBill
}