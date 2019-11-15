const reportData = {
  validToken: {
    'x-auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9zY2FybXVnZW56aUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6Ik1VR0VOWkkiLCJpZCI6NCwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU3Mzg1NDY0NCwiZXhwIjoxNjA1MzkwNjQ0LCJpc3MiOiJ3d3cuand0LmlvIn0.YbtZ9UZGvuw5e_M4brIe6XaMbjrEt9rEoFa8Ic_wcBQ',
  },
  invalidToken: {
    'x-auth': 'eyJhjbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNsZW1lbnRtaXN0aWNvMkBnbWFpbC5jb20iLCJ1c2VySWQiOjI3MzY0NDQ0NDQsInVzZXJuYW1lIjoiTWlzdGljbyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE1NzI5Njc4OTUsImV4cCI6MTYwNDUwMzg5NSwiaXNzIjoid3d3Lmp3dC5pbyJ9.lnac2XBgSbSIatrboilxEZd-S6TROjm_A-CWAijmA1Q',
  },
  invalidAdminToken: {
    'x-auth': 'eyJkhbGciOibJIUzI1NiIsmInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNsZW1lbnRtaXN0aWNvMkBnbWFpbC5jb20iLCJ1c2VySWQiOjI3MzY0NDQ0NDQsInVzZXJuYW1lIjoiTWlzdGljbyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE1NzI5Njc4OTUsImV4cCI6MTYwNDUwMzg5NSwiaXNzIjoid3d3Lmp3dC5pbyJ9.lnac2XBgSbSIatrboilxEZd-S6TROjm_A-CWAijmA1Q',
  },
  validAdminToken: {
    'x-auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNsZW1lbnRtaXN0aWNvQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiTWlzdGljbyIsImlkIjo1LCJpc0FkbWluIjp0cnVlLCJpYXQiOjE1NzM4NDM0NTgsImV4cCI6MTYwNTM3OTQ1OCwiaXNzIjoid3d3Lmp3dC5pbyJ9.7adUnrZoU9cEKncojBWoLW7Wo4GBTKcZ0wOZ-C1xTz0',
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
