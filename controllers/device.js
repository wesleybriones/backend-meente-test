const { response } = require('express');

const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize); 


/*
*   Obtener equipos
*/
const getDevices = async (req, res = response) => {
    try {
        const devices = await models.Device.findAll();
        res.status(200).json({
            ok: true,
            devices
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: true,
            msg: 'Por favor hable con el administrador'
        });
    }
}

/*
*   Obtener equipo por serie
*/
const getDeviceBySerie = async (req, res = response) => {
    const serie = req.params.id;
    try {
        const device = await models.Device.findAll({
            where: {
                serial: serie
            }
        });
        res.status(200).json({
            ok: true,
            device
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'  
        });
    }
}

/*
*   Crear equipo
*/
const createDevice = async (req, res = response) => {
    const { serial, description } = req.body;
    try {
        const device = await models.Device.findAll({
            where: {
                serial: serial
            }
        });
        if ( device.lenght === 0 ){
            return res.status(404).json({
                ok: false,
                msg: 'El equipo ya existe.'
            });
        }
        const date = new Date();
        const new_device = await models.Device.create({
            serial: serial,
            description: description,
            input_day: Date.parse(date),
            output_day: "",
        });
        res.status(201).json({
            ok: true,
            msg: 'Equipo creado',
            new_device
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
}

/*
*   Actualizar reportes
*/
const updateDevice = async (req, res = response) => {
    const device_id = req.params.id;
    try {
        const device = await models.Device.findByPk(device_id);
        if( !device ){
            return res.status(404).json({
                ok: false,
                msg: 'El equipo no existe.'
            });
        }
        const date = new Date();
        const deviceUpdate = req.body;
        device.serial = deviceUpdate.serial;
        device.description = deviceUpdate.description;
        device.update_date = Date.parse(date);
        await device.save();
        res.status(200).json({
            ok: true,
            msg: 'equipo actualizado',
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
}

module.exports = {
    getDevices,
    getDeviceBySerie,
    createDevice,
    updateDevice,
}