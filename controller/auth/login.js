const bcrypt = require('bcrypt');
const { Pengurus } = require('../../models');

module.exports = async (req, res) => {
    const { username, password } = req.body;

    await Pengurus.findOne({
        where: { username }
    })
    .then(data => {
        bcrypt.compare(password, data.password, (err, pass) => {
            if (err) {
                return res.status(400).json({
                    status: false,
                    message: err.message
                })
            } else {
                if (pass) {
                    return res.json({
                        status: true,
                        message: 'pengurus berhasil login'
                    });
                } else {
                    return res.status(401).json({
                        status: false,
                        message: 'pengurus gagal login'
                    })
                }
            }
        })
    })
}