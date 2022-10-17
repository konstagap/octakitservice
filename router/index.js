const router = require('express').Router();
const v1 = require('./v1/index');
const notFoundRoutes = require('./notFound');
const health = require('../controller/health-controller');
const authMiddleware = require('../middleware/auth-middleware');

router.get('/health', health.check);

router.use(authMiddleware);
router.use('/api/v1', v1);

router.use(notFoundRoutes);

module.exports = router;
