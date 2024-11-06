const express = require('express');
const { getAllItems, getItem } = require('../controllers/item.ts');
const router = express.Router();

router.get('/', getAllItems);
router.get('/:id([0-9]+)', getItem);

module.exports = router;