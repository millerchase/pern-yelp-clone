// connect router
const router = require('express').Router();

// api route requests
const apiRoutes = require('./api');
router.use('/api/v1', apiRoutes);

// invalid route requests
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
