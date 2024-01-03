const { response } = require('express');

const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize); 


/*
*   Obtener clientes
*/
const getClients = async (req, res = response) => {
    try {
        const clients = await models.Client.findAll();
        res.status(200).json({
            ok: true,
            clients
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
*   Obtener clientes por Id
*/
const getClientById = async (req, res = response) => {
    const client_id = req.params.id;
    try {
        const client = await models.Client.findByPk( client_id );
        if( !client ){
            res.status(404).json({
                ok: false,
                msg: 'El cliente no existe'
            });
        }
        res.status(200).json({
            ok: true,
            client
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
*   Crear cliente
*/
const createClient = async (req, res = response) => {
    const { identification_ruc, names, surnames, genre, 
            direction, phone, city, mail, state } = req.body;
    try {
        const client = await models.Client.findByPk(identification_ruc);
        if ( client ){
            return res.status(404).json({
                ok: false,
                msg: 'El cliente ya existe.'
            });
        }
        const date = new Date();
        const new_client = await models.Client.create({
            identification_ruc: identification_ruc,
            names: names,
            surnames: surnames, 
            genre: genre, 
            direction: direction, 
            phone: phone, 
            city: city, 
            mail: mail,
            state: state,
            create_date: Date.parse(date),
            update_date: "",
        })
        res.status(201).json({
            ok: true,
            msg: 'Cliente creado',
            new_client
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
*   Actualizar cliente
*/
const updateClient = async (req, res = response) => {
    const client_id = req.params.id;
    try {
        const client = await models.Client.findByPk(client_id);
        if ( !client ){
            return res.status(404).json({
                ok: false,
                msg: 'El cliente no existe.'
            });
        }
        if ( client.identification_ruc.toString() !== client_id ){
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio de editar este evento'
            });
        }
        const date = new Date();
        const clientUpdate = req.body;
        client.names = clientUpdate.names;
        client.surnames = clientUpdate.surnames;
        client.genre = clientUpdate.genre;
        client.direction = clientUpdate.direction,
        client.phone = clientUpdate.phone;
        client.city = clientUpdate.city;
        client.mail = clientUpdate.mail;
        client.state = clientUpdate.state;
        client.update_date = Date.parse(date);
        await client.save();
        res.status(200).json({
            ok: true,
            msg: 'reporte actualizado',
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
*   Eliminar cliente
*/
const deleteClient = async (req, res = response) => {
    const client_id = req.params.id;
    const date = new Date();
    try {
        const client = await models.Client.findByPk(client_id);
        if ( !client ){
            return res.status(404).json({
                ok: false,
                msg: 'El cliente no existe.'
            });
        }
        client.state = 'inactivo';
        client.update_date = Date.parse(date);
        await client.save();
        res.status(200).json({
            ok: true,
            msg: 'Cliente inactivo',
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
}


module.exports = {
    getClients,
    getClientById,
    createClient,
    updateClient,
    deleteClient,
}