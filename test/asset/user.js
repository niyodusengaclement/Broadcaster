const userData = {
  allowedSignup: {
    id: 10,
    firstname: 'BRUCE',
    lastname: 'Brizzy',
    email: 'brucebrizzy@yahoo.com',
    phoneNumber: '0780282575',
    username: 'Bruce',
    password: 'P455w0rd',
    isAdmin: false,
  },
  missingSignupField: {
    id: 4,
    firstname: '',
    lastname: 'Clement',
    email: 'niyodusenga.clement@yahoo.com',
    phoneNumber: '',
    username: 'NIYODUSENGA',
    password: '5tr0n9P455w0rd',
    isAdmin: false,
  },
  emailTaken: {
    id: 3,
    firstname: 'MISTICO',
    lastname: 'Clement',
    email: 'clementmistico@gmail.com',
    phoneNumber: '0780282570',
    username: 'MISTICO',
    password: 'password1234',
    isAdmin: false,
  },
  // Login verification data
  missingSigninField: {
    email: '',
    password: 'myPa55w0rd',
  },
  invalidUser: {
    email: 'emmy@yahoo.fr',
    password: 'emmanuel123',
  },
  allowedSignin: {
    email: 'clementmistico@gmail.com',
    password: 'password',
  },
  adminAccount: {
    email: 'admin@gmail.com',
    password: 'iamadmin',
  },

};
export default userData;
