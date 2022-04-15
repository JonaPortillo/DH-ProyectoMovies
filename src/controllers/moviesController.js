const db = require('../database/models/index');

module.exports = {
    list: (req, res) => {
        db.Movie.findAll()
            .then(movies => {
                res.render('moviesList.ejs', { movies })
            })
    },
    detail: (req, res) => {
        db.Movie.findByPk(req.params.id)
            .then(movie => {
                res.render('moviesDetail.ejs', { movie });
            });
    },
    new: (req, res) => {
        db.Movie.findAll({
            order: [['release_date', 'DESC']],
            limit: 7
        })
            .then(movies => {
                res.render('newestMovies', { movies });
            });
    },
    'recomended': (req, res) => {
        db.Movie.findAll({
            where: {
                rating: {
                    [db.Sequelize.Op.gte]: 9
                }
            },
            order: [
                ['rating', 'DESC']
            ],
            limit: 5
        })
            .then(movies => {
                res.render('recommendedMovies.ejs', { movies });
            });
    }
}