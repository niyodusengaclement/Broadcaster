const reportData = {
  validToken: {
    'x-auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNsZW1lbnRtaXN0aWNvMkBnbWFpbC5jb20iLCJ1c2VySWQiOjI3MzY0NDQ0NDQsInVzZXJuYW1lIjoiTWlzdGljbyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE1NzI5Njc4OTUsImV4cCI6MTYwNDUwMzg5NSwiaXNzIjoid3d3Lmp3dC5pbyJ9.lnac2XBgSbSIatrboilxEZd-S6TROjm_A-CWAijmA1Q',
  },
  invalidToken: {
    'x-auth': 'eyJhjbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNsZW1lbnRtaXN0aWNvMkBnbWFpbC5jb20iLCJ1c2VySWQiOjI3MzY0NDQ0NDQsInVzZXJuYW1lIjoiTWlzdGljbyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE1NzI5Njc4OTUsImV4cCI6MTYwNDUwMzg5NSwiaXNzIjoid3d3Lmp3dC5pbyJ9.lnac2XBgSbSIatrboilxEZd-S6TROjm_A-CWAijmA1Q',
  },
  invalidAdminToken: {
    'x-auth': 'eyJkhbGciOiJIUzI1NiIsmInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNsZW1lbnRtaXN0aWNvMkBnbWFpbC5jb20iLCJ1c2VySWQiOjI3MzY0NDQ0NDQsInVzZXJuYW1lIjoiTWlzdGljbyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE1NzI5Njc4OTUsImV4cCI6MTYwNDUwMzg5NSwiaXNzIjoid3d3Lmp3dC5pbyJ9.lnac2XBgSbSIatrboilxEZd-S6TROjm_A-CWAijmA1Q',
  },
  validAdminToken: {
    'x-auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNsZW1lbnRtaXN0aWNvMkBnbWFpbC5jb20iLCJ1c2VySWQiOjExMTExMTExMTExMjIyLCJ1c2VybmFtZSI6Ik1pc3RpY28iLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE1NzI5NjgyMDEsImV4cCI6MTYwNDUwNDIwMSwiaXNzIjoid3d3Lmp3dC5pbyJ9.8pvpDsz8-tAilIDD96RTVgeXrIntpHZo8-z-GHPLOns',
  },
  location: '197783736 109735463',
  missingLocation: '',
  newStatus: 'under investigation',
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
    createdBy: 12333333333,
    comment: 'One traffic police who has rank of Caporal asks me some money while I was stopping my car to let students cross te road to school and he threaten me to charge me 50000FRW of disobedience',
    location: '10845635353 173645473999',
    status: 'under investigation',
    images: 'my images',
    videos: 'my videos',
    tag: 'corruption',
  },
  missingFieldReport: {
    id: 4,
    title: ' ',
    type: ' ',
    createdOn: '20-Apr-2019',
    createdBy: 12333333333,
    comment: 'One traffic police who has rank of Caporal asks me some money while I was stopping my car to let students cross te road to school and he threaten me to charge me 50000FRW of disobedience',
    location: '10845635353 173645473999',
    status: 'under investigation',
    images: 'my images',
    videos: 'my videos',
    tag: 'corruption',
  },
};

export default reportData;
