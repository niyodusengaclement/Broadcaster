import express from 'express';
import signup from '../controllers/signup';
import signin from '../controllers/signin';
import userAuthentication from '../middleware/auth';
import allReports from '../controllers/AllReports';

const routes = express.Router();

routes.post('/auth/signup', signup);
routes.post('/auth/signin', signin);
routes.get('/red-flags', userAuthentication, allReports);

export default routes;
