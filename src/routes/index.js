import Express from 'express';
import healthcheck from './healthcheck';
import hash from './hash';
import signin from './signin';
import signup from './signup';
import validateRequest from '../requestValidations/validateMiddleware';
import hashValidations from '../requestValidations/hash';
import signinBodyValidators from '../requestValidations/signin';

const router = Express.Router();
router.get('/healthcheck', healthcheck);
router.post('/hash', hashValidations, validateRequest, hash);
router.post('/signin', signinBodyValidators, validateRequest, signin);
router.post('/signup', signinBodyValidators, validateRequest, signup);
export default router;
