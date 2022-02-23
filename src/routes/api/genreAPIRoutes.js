const express = require('express');
const router = express.Router();

const genreController = require('../../controllers/api/genresAPIController');

router.get('/', genreController.list);
router.get('/:id', genreController.detail);

module.exports = router;