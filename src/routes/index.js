import Express from 'express';
import healthcheck from './healthcheck';
import hash from './hash';

const router = Express.Router();
router.use('/healthcheck', healthcheck);
router.use('/hash', hash);
export default router;
