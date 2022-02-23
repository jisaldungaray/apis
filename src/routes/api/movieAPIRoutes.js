const express = require('express');
const router = express.Router();

const movieAPIController = require('../../controllers/api/movieAPIController');

router.get('/', movieAPIController.list);
router.get('/search', movieAPIController.search);
router.get('/:id', movieAPIController.show);

router.post('/', movieAPIController.create);
router.delete('/:id', movieAPIController.destroy);
module.exports = router; 