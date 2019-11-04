const reportData = {
  validToken: {
    'x-auth': '88888888dddd-didid8d8dd88d8d8d',
  },
  invalidToken: {
    'x-auth': '88888888dddd-didid8d8dd88d8d8d',
  },
  invalidAdminToken: {
    'x-auth': '88888888dddd-didid8d8dd88d8d8d',
  },
  validAdminToken: {
    'x-auth': '88888888dddd-didid8d8dd88d8d8d',
  },
  location: '197783736 109735463',
  missingLocation: '197783736 109735463',
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
