const { response } = require('express');

const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize); 


/*
*   Obtener reportes
*/
const getProblems = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'get reportes'
    })
}

/*
*   Obtener reportes por Id
*/
const getProblemById = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'get reporte by id'
    })
}

/*
*   Crear reportes
*/
const createProblem = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'reporte creado'
    })
}

/*
*   Obtener reportes
*/
const updateProblem = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'reporte actualizado'
    })
}

/*
*   Obtener reportes
*/
const deleteProblem = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'reporte eliminado'
    })
}
module.exports = {
    getProblems,
    getProblemById,
    createProblem,
    updateProblem,
    deleteProblem
}
