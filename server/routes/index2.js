import express from 'express';
import auth from '../middleware/v2/auth';
import users from '../controllers/v2/users';

const dbRoutes = express.Router();

dbRoutes.post('/auth/signup', users.signup);
dbRoutes.post('/auth/signin', users.signin);
dbRoutes.get('/auth/users', auth.userAuthentication, auth.isAdmin, users.getUsers);
dbRoutes.post('/auth/forget', users.forgetPassword);
dbRoutes.patch('/auth/reset/:email/:token', auth.verifyLink, users.resetPassword);

export default dbRoutes;
