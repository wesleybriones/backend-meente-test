const { response } = require('express');

const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize); 


/*
*   Obtener reportes
*/
const getReports = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'get reportes'
    })
}

/*
*   Obtener reportes por Id
*/
const getReportById = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'get reporte by id'
    })
}

/*
*   Crear reportes
*/
const createReport = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'reporte creado'
    })
}

/*
*   Actualizar reportes
*/
const updateReports = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'reporte actualizado'
    })
}

/*
*   Eliminar reportes
*/
const deleteReport = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'reporte eliminado'
    })
}
module.exports = {
    getReports,
    getReportById,
    createReport,
    updateReports,
    deleteReport
}