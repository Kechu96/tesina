const User = require('../models/user'),
    jwt = require('jsonwebtoken'),
    config = require('../config/dev');

exports.uploadProfilePicture = function (req, res) {
    User.findById(req.params.id)
        .exec(function (err, userFound) {
            if (userFound) {
                User.updateOne({ _id: req.params.id }, {
                    photo: req.file.path
                }, function (err, success) {
                    if (err) {
                        return res.status(422).send({ title: 'Error', details: 'No se pudo cargar tu imagen' });
                    }
                    return res.json({ title: 'Registro exitoso', details: 'Bienvenido!' });
                })
            }
        })
}
//login
exports.logInUser = function (req, res) {
    const { email, password } = req.body;
    User.findOne({ email }, function (err, userFound) {
        if (err) {
            return res.status(422).send({ title: 'Error', details: 'Error desconocido, intentalo de nuevo mas tarde' });
        }
        if (!userFound) {
            return res.status(422).send({ title: 'Usuario no encontrado', details: 'Registrate para poder ingresar al sistema' });
        } else {
            if (userFound.checkPassword(password)) {
                const token = jwt.sign({
                    userId: userFound._id,
                    name: userFound.name
                }, config.SECRET, { expiresIn: '1h' });
                return res.json(token);
            } else {
                return res.status(422).send({ title: 'Datos no validos', details: 'Correo electronico o contraseña erroneos' });
            }
        }
    });
}
//logup
exports.logUpUser = function (req, res) {
    const {
        name,
        lastName,
        lastName2,
        age,
        gender,
        phone,
        email,
        password,
        confirmPassword,
        school
    } = req.body;
    if (password !== confirmPassword) {
        return res.status(422).send({ title: 'Error', details: 'Confirma correctamente tu contrasena' });
    }
    if (age < 18) {
        return res.status(422).send({ title: 'Error', details: 'Tienes que ser mayor de edad para ingresar' });
    }
    User.findOne({ email: email }, function (err, existingUser) {
        if (existingUser) {
            return res.status(422).send({ title: 'Usuario existente', details: 'Ya existe un usuario con este correo' });
        } else {
            const user = new User({
                name: name,
                lastName: lastName,
                lastName2: lastName2,
                age: age,
                gender: gender,
                phone: phone,
                email: email,
                password: password,
                school: school
            });

            user.save(function (err) {
                if (err) {
                    return res.status(422).send({ title: 'Error', details: 'Ha ocurrido un error al ingresar los datos' });
                }
                return res.json({ title: 'Registro exitoso', details: '¡Bienvenido!', userId: user._id });
            });
        }
    })

}
//get User by id
exports.getUserById = function (req, res) {
    User.findById(req.params.id)
        .populate('school')
        .populate('post')
        .exec(function (err, userFound) {
            if (err) {
                return res.status(422).send({ title: 'Error', details: 'No se pudieron cargar los datos del usuario' });
            }
            return res.json(userFound);
        });
}
exports.editProfile = function(req,res){
    
}