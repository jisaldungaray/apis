const db = require('../../database/models');
const Op = db.Sequelize.Op;
const fetch = require('node-fetch');

const API = ('http://www.omdbapi.com/?i=tt3896198&apikey=fe8ce594');


const movieAPIController = {
    list: (req, res) => {
        db.Movie
            .findAll()
            .then((movies) => {
                return res.status(200).json({
                    total: movies.length,
                    data: movies,
                    status: 200
                });
            })
    },
    show: (req, res) => {
        db.Movie
            .findByPk(req.params.id)
            .then(movie => {
                return res.status(200).json({
                    data: movie,
                    status: 200
                });
            })
    },
    create: (req, res) => {
        db.Movie
            .create({
                ...req.body
            })
            .then(movie => {
                return res.status(200).json({
                    data: movie,
                    status: 200,
                    msg: 'Creacion exitosa'
                });
            })
    },
    destroy: (req, res) => {
        db.Movie
            .destroy({
                where: {id: req.params.id}
            })
            .then(response => {
                return res.status(200).json(response)
            })
    },
    search: (req, res) => {
        db.Movie
            .findAll({
                where:{
                    title: { [Op.like]:'%'+ req.query.keyword +'%'}
                }
            })
            .then(movie => {
                return res.status(200).json(movie)
            })
    }
    
                
        
    
}

module.exports = movieAPIController;