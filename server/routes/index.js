import express from 'express';
import userAuthentication from '../middleware/auth';
import grantAccess from '../middleware/access';
import isAdmin from '../middleware/admin';
import verifyAuth from '../middleware/reset';
import report from '../controllers/report';
import users from '../controllers/users';


const routes = express.Router();

routes.post('/auth/signup', users.signup);
routes.post('/auth/signin', users.signin);
routes.get('/auth/users', userAuthentication, isAdmin, users.getUsers);
routes.post('/auth/forget', users.forgetPassword);
routes.patch('/auth/reset/:email/:token', verifyAuth, users.resetPassword);

routes.post('/red-flags', userAuthentication, report.newRecord);
routes.get('/red-flags/:redFlagId', userAuthentication, report.singleReport);
routes.get('/red-flags', userAuthentication, report.allReports);
routes.patch('/red-flags/:red_Flag_Id/comment', userAuthentication, grantAccess, report.editComment);
routes.patch('/red-flags/:red_Flag_Id/location', userAuthentication, grantAccess, report.changeLocation);
routes.patch('/red-flags/:red_Flag_Id/status', userAuthentication, isAdmin, report.changeStatus);
routes.delete('/red-flags/:red_Flag_Id', userAuthentication, grantAccess, report.deleteRecord);

export default routes;
