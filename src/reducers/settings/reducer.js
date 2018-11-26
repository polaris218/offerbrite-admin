import types from './types';

const initialState = {
  users: [
    { label: 'User id', value: true },
    { label: 'Name', value: true },
    { label: 'Email', value: true },
    { label: 'Country', value: true },
    { label: 'Categories', value: true },
  ],
  companies: [
    { label: 'User id', value: true },
    { label: 'Name', value: true },
    { label: 'Email', value: true },
    { label: 'Country', value: true },
    { label: 'Phone', value: true },
    { label: 'Website', value: true },
    { label: 'Profile status', value: false },
  ],
  offers: [
    { label: 'Title', value: true },
    { label: 'Description', value: false },
    { label: 'User', value: false },
    { label: 'Category', value: true },
    { label: 'Price-sale', value: true },
    { label: 'Address', value: true },
    { label: 'Picture', value: true },
  ],
};

const copyAndChangeSetting = (data, setting) => {
  return data.map(item => {
    if (item.label === setting) {
      return { ...item, value: !item.value };
    }
    return item;
  });
};

export default (state = initialState, action) => {
  let setting;
  switch (action.type) {
    case types.ON_CHANGE_USERS_TABLE_SETTINGS:
      setting = action.payload.setting;
      return {
        ...state,
        users: copyAndChangeSetting(state.users, setting),
      };
    case types.ON_CHANGE_COMPANIES_TABLE_SETTINGS:
      setting = action.payload.setting;
      return {
        ...state,
        companies: copyAndChangeSetting(state.companies, setting),
      };
    case types.ON_CHANGE_OFFERS_TABLE_SETTINGS:
      setting = action.payload.setting;
      return {
        ...state,
        offers: copyAndChangeSetting(state.offers, setting),
      };
    default:
      return state;
  }
};
