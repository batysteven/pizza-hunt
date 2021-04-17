const router = require('express').Router();
const htmlRoutes = require('./html/html-routes');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

module.exports = router;
