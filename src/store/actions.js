import {createAction} from 'redux-actions';
import loadUsersService from '../services/loadUsers';

export const LOAD_USERS_REQUEST = 'load_user_request';
export const LOAD_USERS_SUCCESS = 'load_user_success';
export const DELETE_USER = 'DELETE_USER';

const loadUsersRequest = createAction(LOAD_USERS_REQUEST);
const loadUsersSuccess = createAction(LOAD_USERS_SUCCESS);

export const loadUsersAction = () => (dispatch) => {
  dispatch(loadUsersRequest());

  return loadUsersService().then(users => {
    dispatch(loadUsersSuccess(users));

    return users;
  });
};

export const deleteUserAction = createAction(DELETE_USER);

export const INC_COUNTER = 'INC_COUNTER';
export const incrementCounter = createAction(INC_COUNTER);