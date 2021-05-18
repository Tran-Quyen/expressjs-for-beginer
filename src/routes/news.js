const express = require('express');
const router = express.Router();

// Route configuration
const newsController = require('../app/controllers/NewsController.js');

// newsController.index
router.get('/:slug', newsController.show);
router.get('/', newsController.index);

module.exports = router;
