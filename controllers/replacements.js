const { response } = require('express');

const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models.js");
var models = initModels(sequelize); 


/*
*   Obtener repuestos por solucion
*/
const getReplacementsBySolution = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'get reportes'
    })
}

/*
*   Obtener reportes por Id
*/
const getReplacementById = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'get reporte by id'
    })
}

/*
*   Crear reportes
*/
const createReplacement = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'reporte creado'
    })
}

/*
*   Obtener reportes
*/
const updateReplacement = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'reporte actualizado'
    })
}

/*
*   Obtener reportes
*/
const deleteReplacement = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'reporte eliminado'
    })
}
module.exports = {
    getReplacementsBySolution,
    getReplacementById,
    createReplacement,
    updateReplacement,
    deleteReplacement
}