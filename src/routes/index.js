import Express from 'express';
import { check } from 'express-validator';
import healthcheck from './healthcheck';
import hash from './hash';
import validateRequest from '../requestValidations/validateMiddleware';
import hashValidations from '../requestValidations/hash';

const router = Express.Router();
router.get('/healthcheck', healthcheck);
router.post('/hash', hashValidations, validateRequest, hash);
export default router;
