const router = require('express').Router();
const userRoutes = require('./dashboardRoutes');
const projectRoutes = require('./homepageRoutes');

router.use('/user', userRoutes);
router.use('/project', projectRoutes);

module.exports = router;