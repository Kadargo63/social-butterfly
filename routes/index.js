const router = require('express').Router();

// Import all of the API routes from /api/index.js
const apiRoutes = require('./api');

// Add prefix of `/api` to all of the api routes imported from the `api` direcory
router.use('/api', apiRoutes);

router.use((reg,res) => {
    res.status(404).send('<h1>😝 404 Error!</h1>');
});

module.exports = router;
