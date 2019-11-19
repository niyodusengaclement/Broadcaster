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
  validPassword: {
    password: 'newpassword',
    confirmPassword: 'newpassword',
  },
  invalidPassword: {
    password: 'newpassword',
    confirmPassword: 'fakepassword',
  },
  resetToken: 'clementmistico@gmail.com/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNsZW1lbnRtaXN0aWNvQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiTWlzdGljbyIsImlkIjo1LCJpc0FkbWluIjp0cnVlLCJpYXQiOjE1NzQxNzMxNzcsImV4cCI6MTU3NDI1OTU3NywiaXNzIjoid3d3Lmp3dC5pbyJ9.XDVnP2S0d2jwz7gylEMZFwcbv8okXEcj2AIFDMXuFb4',

};
export default userData;
