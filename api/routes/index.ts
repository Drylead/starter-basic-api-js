// routes/index.ts

const { Router } = require('express');
const public = require('./public.ts');
const items = require('./items.ts');

const router = Router();

router.use('/', public);
router.use('/items', items);

module.exports = router;