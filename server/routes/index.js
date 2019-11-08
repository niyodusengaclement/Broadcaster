import express from 'express';
import signup from '../controllers/signup';
import signin from '../controllers/signin';
import userAuthentication from '../middleware/auth';
import allReports from '../controllers/AllReports';
import oneRecord from '../controllers/oneRecord';
import changeLocation from '../controllers/changeLocation';

const routes = express.Router();

routes.post('/auth/signup', signup);
routes.post('/auth/signin', signin);
routes.get('/red-flags', userAuthentication, allReports);
routes.get('/red-flags/:redFlagId', userAuthentication, oneRecord);
routes.patch('/red-flags/:red_Flag_Id/location', userAuthentication, changeLocation);

export default routes;
