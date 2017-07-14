import {handleActions} from 'redux-actions';

import {LOAD_USERS_REQUEST, LOAD_USERS_SUCCESS, DELETE_USER, INC_COUNTER} from './actions';

export const defaultState = {
  counter: 0,
  loading: false,
  loaded: false,
  data: []
};

export default handleActions({
  [LOAD_USERS_REQUEST]: (state) => ({
    ...state,
    loading: true,
    loaded: false,
    data: []
  }),

  [LOAD_USERS_SUCCESS]: (state, {payload:users}) => ({
    ...state,
    loading: false,
    loaded: true,
    data: users
  }),
  [DELETE_USER]: (state, {payload:userToDelete}) => ({
    ...state,
    data: state.data.filter(user => user.id !== userToDelete.id)
  }),
  [INC_COUNTER]: (state) => ({
    ...state,
    counter: state.counter + 1
  })
}, defaultState);