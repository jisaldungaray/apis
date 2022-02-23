const db = require('../../database/models');
const Op = db.Sequelize.Op;


const genreAPIController = {
    list: (req, res) => {
        db.Genre
            .findAll()
            .then(genre =>{
                return res.status(200).json({
                    total: genre.lenght,
                    data: genre,
                    status: 200
                });
            })
    },
    detail: (req, res) => {
        db.Genre
            .findAll({
                where: {id: req.params.id}
            })
            .then(genre => {
                return res.status(200).json({
                    data: genre,
                    status: 200
                })
            })
    }

}

module.exports = genreAPIController;