import express from 'express';
import users from '../controllers/v2/users';

const dbRoutes = express.Router();

dbRoutes.post('/auth/signup', users.signup);
dbRoutes.post('/auth/signin', users.signin);

export default dbRoutes;
