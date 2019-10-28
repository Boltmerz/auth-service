import Express from 'express';
import healthcheck from './healthcheck';
import hash from './hash';
import signin from './signin';
import validateRequest from '../requestValidations/validateMiddleware';
import hashValidations from '../requestValidations/hash';

const router = Express.Router();
router.get('/healthcheck', healthcheck);
router.post('/hash', hashValidations, validateRequest, hash);
router.post('/signin', validateRequest, signin);
export default router;
