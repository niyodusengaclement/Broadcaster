import { describe } from 'mocha';

// These test are of Object modal's test
import signupTest from './v1/user/signup.test';
import signinTest from './v1/user/signin.test';
import createReportTest from './v1/reports/createReport.test';
import getAllReportsTest from './v1/reports/getAllReports.test';
import editLocationTest from './v1/reports/editLocation.test';
import editCommentTest from './v1/reports/editComment.test';
import getSingleReportTest from './v1/reports/singleReport.test';
import deleteReportTest from './v1/reports/deleteReport.test';
import changeStatusTest from './v1/reports/changeStatus.test';
import getUsersTest from './v1/user/users.test';
import forgetPasswordTest from './v1/user/forgetPassword.test';
import resetPasswordTest from './v1/user/resetPassword.test';

// Database test endpoints (Version 2 Endpoints)
import signupTestV2 from './v2/user/signup.test';
import signinTestV2 from './v2/user/signin.test';
import createReportTestV2 from './v2/reports/createReport.test';
import getAllReportsTestV2 from './v2/reports/getAllReports.test';
import editLocationTestV2 from './v2/reports/editLocation.test';
import editCommentTestV2 from './v2/reports/editComment.test';
import getSingleReportTestV2 from './v2/reports/singleReport.test';
import deleteReportTestV2 from './v2/reports/deleteReport.test';
import changeStatusTestV2 from './v2/reports/changeStatus.test';
import getUsersTestV2 from './v2/user/users.test';
import forgetPasswordTestV2 from './v2/user/forgetPassword.test';
import resetPasswordTestV2 from './v2/user/resetPassword.test';

// Object Modal
describe('System should run perfect with Object modal', () => {
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

// Database Modal
describe('System should run perfect with database modal', () => {
  describe('User signup', signupTestV2);
  describe('User Login', signinTestV2);
  describe('Create Red-flag or Intervention report', createReportTestV2);
  describe('Get all Records user has created', getAllReportsTestV2);
  describe('Get specific Report', getSingleReportTestV2);
  describe('Edit Location', editLocationTestV2);
  describe('Edit comment', editCommentTestV2);
  describe('Delete specific report', deleteReportTestV2);
  describe('Admin change status', changeStatusTestV2);
  describe('List of users', getUsersTestV2);
  describe('Forget password', forgetPasswordTestV2);
  describe('Reset password', resetPasswordTestV2);
});
