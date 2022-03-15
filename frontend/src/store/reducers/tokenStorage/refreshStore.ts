const SET_REFRESH = 'refresh/SET_REFRESH';

export const setRefresh = (refresh: any) => ({ type: SET_REFRESH, refresh });

export const refreshReducer = (state = { refresh: '' }, action: any) => {
  switch (action.type) {
    case SET_REFRESH: {
      return { refresh: action.refresh };
    }
    default:
      return state;
  }
};
