const express = require('express');
const { home } = require('../controllers/public.ts');
const router = express.Router();

router.get('/', home);

module.exports = router;