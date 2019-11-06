const userCreated = () => { window.location = '../pages/login.html'; };
const signin = () => { window.location = '../pages/myRecords.html'; };
const forgetPassword = () => { window.location = '../pages/passReseted.html'; };
const resetPassword = () => { window.location = '../pages/login.html'; };
const readrecord = () => { window.location = '../pages/viewRecord.html'; };
const createRecord = () => { window.location = '../pages/myRecords.html'; };
const editRecord = () => { window.location = '../pages/records.html'; };
const deleterecord = (title) => {
  const ok = window.confirm(`Are sure, you want to delete this report? \n ${title}`);
  if (ok) {
    location = '../pages/recordDeleted.html';
  }
};

const adminSignin = () => { window.location = '../admin/allRecords.html'; };
const adminReadrecord = () => { window.location = '../admin/viewRecord.html'; };
