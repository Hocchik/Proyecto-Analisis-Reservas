import {Router} from 'express';
import { authRequired } from '../middlewares/validateToken.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { registerSchema, loginSchema } from '../schemas/auth.schema.js';
import { register, login, logout, profile, verifyToken } from '../controllers/auth.controller.js';

const router = Router();
/* Modificar para que este acorde a SQL */

router.post('/register', validateSchema(registerSchema), register);

router.post('/login', validateSchema(loginSchema), login);

router.post('/logout', logout);

/* router.get("/verify", verifyToken); */

router.get("/profile", authRequired, profile);


export default router