const SET_ACCESS = 'access/SET_ACCESS';

export const setAccess = (access: any) => ({ type: SET_ACCESS, access });

export const accessReducer = (state = { access: '' }, action: any) => {
  switch (action.type) {
    case SET_ACCESS: {
      return { access: action.access };
    }
    default:
      return state;
  }
};
