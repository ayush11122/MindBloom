import  { Router } from 'express';
const router = Router();

import { SignIn, SignUp} from '../controllers/UserController'


router.post('/signup', SignUp);
router.post('/signin', SignIn);



export default router