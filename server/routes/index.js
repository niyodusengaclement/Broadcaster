import express from 'express';
import signup from '../controllers/signup';

const routes = express.Router();

routes.post('/auth/signup', signup);

export default routes;
