const { response } = require('express');

const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize); 


/*
*   Obtener empleados
*/
const getEmployees = async (req, res = response) => {
    try {
        const employees = await models.Employee.findAll({
            attributes: ['identification', 
                         'names',
                         'surnames',
                         'state',
                         'direction',
                         'city',
                         'mail'
                        ]
        }); 
        res.status(200).json({
            ok: true,
            employees
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        })
    }
}

/*
*   Obtener empleados por Id
*/
const getEmployeesById = async (req, res = response) => {
    const emp_id = req.params.id;
    try {
        const emp = await models.Employee.findByPk( emp_id, {
            attributes: ['identification', 
                         'names',
                         'surnames',
                         'state',
                         'direction',
                         'city',
                         'mail'
                        ]
        });
        if(! emp ){
            res.status(400).json({
                ok: false,
                msg: 'El empleado no existe'
            });
        }
        res.status(200).json({
            ok: true,
            emp
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'  
        })
    }
}

module.exports = {
    getEmployees,
    getEmployeesById,
}