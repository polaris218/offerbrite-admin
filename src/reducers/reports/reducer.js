import types from './types';

const initialState = {
  reportsList: [
    {
      date: new Date().toDateString(),
      userId: 'qwedasd1311233d3d3',
      username: 'Billy Bob',
      email: 'bill@gmail.com',
      reason: 'Inappropriate material',
      title: 'Some title was here',
      offerId: '31231234233d3d33',
    },
    {
      date: new Date().toDateString(),
      userId: 'asd1asd311233d3d3',
      username: 'Billy Bob',
      email: 'bill@gmail.com',
      reason: 'Inappropriate material',
      title: 'Some title was here too',
      offerId: 'a12d4233d3d33',
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
