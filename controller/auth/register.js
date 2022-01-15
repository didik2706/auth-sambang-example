require('dotenv').config();
const bcrypt = require('bcrypt');
const { Pengurus } = require('../../models')

module.exports = async (req, res) => {
    const { username, password } = req.body;

    await Pengurus.create({
        username,
        password: bcrypt.hashSync(password, 10)
    })
    .then(data => {
        return res.status(201).json({
            status: true,
            message: 'pengurus berhasil ditambahkan',
            data
        })
    })
    .catch(error => {
        return res.status(400).json({
            status: false,
            message: error.message
        })
    })
}