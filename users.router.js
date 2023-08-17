// users.routes.js
import express from 'express';
import usersService from './users.services.js';





const router = express.Router();

router.post('/register', usersService.register);





export default router;


