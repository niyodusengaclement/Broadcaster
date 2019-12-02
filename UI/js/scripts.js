
function match() {
  document.getElementById('confPasswordRes').innerHTML = 'Password doesn\'t match';
  document.getElementById('confPassword').style.border = '1px solid red';
}

const userCreated = () => {
  const signupForm = document.createAccountForm;
  const pass = document.createAccountForm.password.value;
  const confirmPass = document.createAccountForm.confPassword.value;
  if (signupForm.checkValidity() === false) {
    return false;
  }
  if (confirmPass !== pass) {
    match();
    return false;
  }
};

const resetPassword = () => {
  const password = document.resetForm.password.value;
  const confirmPass = document.resetForm.confPassword.value;

  if (confirmPass !== password) {
    match();
    return false;
  }
};

const readrecord = () => { window.location = '../pages/viewRecord.html'; };

const deleterecord = (title) => {
  const ok = window.confirm(`Are sure, you want to delete this report? \n ${title}`);
  if (ok) {
    location = '../pages/records.html';
  }
};

const adminReadrecord = () => { window.location = '../admin/viewRecord.html'; };
