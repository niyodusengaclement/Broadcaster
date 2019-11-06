import express from 'express';
import signup from '../controllers/signup';
import signin from '../controllers/signin';

const routes = express.Router();

routes.post('/auth/signup', signup);
routes.post('/auth/signin', signin);

export default routes;
