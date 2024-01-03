const { response } = require('express');
const bcrypt = require('bcryptjs');

const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize); 

const { generarJWT } = require('../helpers/jwt')

/*
*   Crear empleado
*/
const crearUsuario = async (req, res = response ) => {
    const { identification, names, surnames, genre, state,
        phone, direction, city, mail, user, password 
    } = req.body;
    try {
        const emp = await models.Employee.findByPk(identification);
        if ( emp ){
            return res.status(400).json({
                ok: false,
                msg: 'El usuario ya existe.'
            });
        }
        const token = await generarJWT( identification, names );
        const salt = bcrypt.genSaltSync();
        const new_password = bcrypt.hashSync( password, salt );
        models.Employee.create({
            identification: identification,
            names: names,
            surnames: surnames,
            genre: genre,
            state: state,
            phone: phone,
            direction: direction,
            city: city,
            mail: mail,
            user: user,
            password: new_password
        });
        res.status(201).json({
            ok: true,
            msg: 'Usuario creado',
            employee: {
                identification: identification,
                names: names,
                surnames: surnames,
                mail: mail,
                token
            }
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
*   Logear empleado
*/
const loginUsuario = async (req, res ) => {
    const { user, password } = req.body;
    try {
        const employee = await models.Employee.findOne({
            where: { user: user }
        });
        if ( !employee ){
            return res.status(400).json({
                ok: false,
                msg: 'El usuario no existe'
            });
        }
        const validPassword = bcrypt.compareSync( password, employee.password );
        if (!validPassword){
            return res.status(400).json({
                ok: false,
                msg: 'La contraseña es incorrecta'
            });
        }
        const token = await generarJWT( employee.identification, employee.names );
        res.json({
            ok: true,
            msg: 'Login exitoso',
            employee: {
                identification: employee.identification,
                names: employee.names,
                mail: employee.mail,
                token
            }
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
*   Revalidar token empleado
*/
const revalidarToken = async (req, res ) => {

    const { uid, name } = req;
    const token = await generarJWT( uid, name );
    res.json({
        ok: true,
        uid, 
        name,
        token
    });
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}