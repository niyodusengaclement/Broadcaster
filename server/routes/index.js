import express from 'express';
import signup from '../controllers/signup';
import signin from '../controllers/signin';
import userAuthentication from '../middleware/auth';
import allReports from '../controllers/AllReports';
import oneRecord from '../controllers/oneRecord';
import changeLocation from '../controllers/changeLocation';
import editComment from '../controllers/editComment';
import deleteRecord from '../controllers/deleteRecord';
import changeStatus from '../controllers/changeStatus';

const routes = express.Router();

routes.post('/auth/signup', signup);
routes.post('/auth/signin', signin);
routes.get('/red-flags', userAuthentication, allReports);
routes.get('/red-flags/:redFlagId', userAuthentication, oneRecord);
routes.patch('/red-flags/:red_Flag_Id/location', userAuthentication, changeLocation);
routes.patch('/red-flags/:red_Flag_Id/comment', userAuthentication, editComment);
routes.delete('/red-flags/:red_Flag_Id', userAuthentication, deleteRecord);
routes.patch('/red-flags/:red_Flag_Id/status', userAuthentication, changeStatus);

export default routes;
