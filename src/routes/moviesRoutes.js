const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');
const addFormValidator = require('../validators/addForm')

router.get('/movies', moviesController.list);
router.get('/movies/new', moviesController.new);
router.get('/movies/recommended', moviesController.recomended);
router.get('/movies/detail/:id', moviesController.detail);
router.get('/movies/add'/*, addFormValidator*/, moviesController.add);
router.post('/movies/create', moviesController.create);


module.exports = router; 