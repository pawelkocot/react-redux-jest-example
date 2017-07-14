jest.mock('../services/loadUsers');

import {loadUsersAction, deleteUserAction, DELETE_USER} from './actions';

const user = {id: 1, email: 'aaa@example.com'};

it('deletes user', () => {
  expect(deleteUserAction(user)).toEqual({
    type: DELETE_USER,
    payload: user
  })
});

it('returns users', () => {
  expect.assertions(2);

  const mock = jest.fn();

  return loadUsersAction()(mock).then(users => {
    expect(users).toHaveLength(2);
    expect(mock).toHaveBeenCalledTimes(2);
  });
});