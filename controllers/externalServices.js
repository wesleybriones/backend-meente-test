const { response } = require('express');

const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize); 


/*
*   Obtener reportes
*/
const getExternalServices = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'get reportes'
    })
}

/*
*   Obtener reportes por Id
*/
const getExternalServiceById = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'get reporte by id'
    })
}

/*
*   Crear reportes
*/
const createExternalService = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'reporte creado'
    })
}

/*
*   Obtener reportes
*/
const updateExternalService = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'reporte actualizado'
    })
}

/*
*   Obtener reportes
*/
const deleteExternalService = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'reporte eliminado'
    })
}
module.exports = {
    getExternalServices,
    getExternalServiceById,
    createExternalService,
    updateExternalService,
    deleteExternalService
}