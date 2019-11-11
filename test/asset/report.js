const reportData = {
  validToken: {
    'x-auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pc3RpY29jbGVtZW50QGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiQ2xlbWVudCIsImlkIjo0LCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNTcyOTc3MDEyLCJleHAiOjE2MDQ1MTMwMTIsImlzcyI6Ind3dy5qd3QuaW8ifQ.I-KXGZay03b5X3tagD5OTnJFYnrN1sPIBiJ8cXyLYFA',
  },
  invalidToken: {
    'x-auth': 'eyJhjbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNsZW1lbnRtaXN0aWNvMkBnbWFpbC5jb20iLCJ1c2VySWQiOjI3MzY0NDQ0NDQsInVzZXJuYW1lIjoiTWlzdGljbyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE1NzI5Njc4OTUsImV4cCI6MTYwNDUwMzg5NSwiaXNzIjoid3d3Lmp3dC5pbyJ9.lnac2XBgSbSIatrboilxEZd-S6TROjm_A-CWAijmA1Q',
  },
  invalidAdminToken: {
    'x-auth': 'eyJkhbGciOibJIUzI1NiIsmInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNsZW1lbnRtaXN0aWNvMkBnbWFpbC5jb20iLCJ1c2VySWQiOjI3MzY0NDQ0NDQsInVzZXJuYW1lIjoiTWlzdGljbyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE1NzI5Njc4OTUsImV4cCI6MTYwNDUwMzg5NSwiaXNzIjoid3d3Lmp3dC5pbyJ9.lnac2XBgSbSIatrboilxEZd-S6TROjm_A-CWAijmA1Q',
  },
  validAdminToken: {
    'x-auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiTWlzdGljbyIsImlkIjo0LCJpc0FkbWluIjp0cnVlLCJpYXQiOjE1NzI5NzcxNjksImV4cCI6MTYwNDUxMzE2OSwiaXNzIjoid3d3Lmp3dC5pbyJ9.3OYfg1jyMaNTQktxIMA31XTDzlk3yZQS4VqVl_aYSZU',
  },
  location: { location: '197783736 109735463' },
  missingLocation: '',
  newStatus: { status: 'under investigation' },
  emptyStatus: '',
  comment: {
    title: 'Primary school fell down',
    type: 'intervention',
    comment: 'The primary school of BWEYEYE need to be re-constructed after heavy rain destroy 2 studying rooms',
    location: '10885635353 173645883999',
    tag: 'school',
  },
  missingFieldsComment: {
    title: '',
    type: '',
    comment: 'The primary school of BWEYEYE need to be re-constructed after heavy rain destroy 2 studying rooms',
    location: '10885635353 173645883999',
    tag: 'school',
  },
  validReport: {
    id: 3,
    title: 'Traffic Police asks me some money',
    type: 'Red-flag',
    createdOn: '20-Apr-2019',
    createdBy: 2,
    comment: 'One traffic police who has rank of Caporal asks me some money while I was stopping my car to let students cross te road to school and he threaten me to charge me 50000FRW of disobedience',
    location: '10845635353 173645473999',
    status: 'under investigation',
    images: [],
    videos: [],
    tag: 'corruption',
  },
  missingFieldReport: {
    id: 4,
    title: '',
    type: '',
    createdOn: '20-Apr-2019',
    createdBy: 11,
    comment: 'One traffic police who has rank of Caporal asks me some money while I was stopping my car to let students cross te road to school and he threaten me to charge me 50000FRW of disobedience',
    location: '10845635353 173645473999',
    status: 'under investigation',
    images: [],
    videos: [],
    tag: 'corruption',
  },
};

export default reportData;
