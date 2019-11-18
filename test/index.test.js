import { describe } from 'mocha';
import signupTest from './user/signup.test';
import signinTest from './user/signin.test';
import createReportTest from './reports/createReport.test';
import getAllReportsTest from './reports/getAllReports.test';
import editLocationTest from './reports/editLocation.test';
import editCommentTest from './reports/editComment.test';
import getSingleReportTest from './reports/singleReport.test';
import deleteReportTest from './reports/deleteReport.test';
import changeStatusTest from './reports/changeStatus.test';
import getUsersTest from './user/users.test';
import forgetPasswordTest from './user/forgetPassword';
import resetPasswordTest from './user/resetPassword';

describe('System should run perfect', () => {
  describe('User signup', signupTest);
  describe('User Login', signinTest);
  describe('Create Red-flag or Intervention report', createReportTest);
  describe('Get all Records user has created', getAllReportsTest);
  describe('Get specific Report', getSingleReportTest);
  describe('Edit Location', editLocationTest);
  describe('Edit comment', editCommentTest);
  describe('Delete specific report', deleteReportTest);
  describe('Admin change status', changeStatusTest);
  describe('List of users', getUsersTest);
  describe('Forget password', forgetPasswordTest);
  describe('Reset password', resetPasswordTest);
});
