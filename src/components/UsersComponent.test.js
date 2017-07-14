import React from 'react';
import {UsersComponent} from './UsersComponent';
import UsersList from './UsersList';
import Loader from './Loader';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

const users = [
  {
    id: 1,
    email: 'user1@example.com'
  },
  {
    id: 2,
    email: 'user2@example.com'
  }
];

test('snapshot', () => {
  const dummy = jest.fn();
  let component = shallow(<UsersComponent loadUsersHandler={dummy} deleteUserHandler={dummy} />);
  expect(toJson(component)).toMatchSnapshot();
  expect(component.find('button').length).toEqual(0);

  component = shallow(<UsersComponent canLoad={true} loadUsersHandler={dummy} deleteUserHandler={dummy} />);
  expect(toJson(component)).toMatchSnapshot();
  expect(component.find('button').length).toEqual(1);

  component = shallow(<UsersComponent isLoading={true} loadUsersHandler={dummy} deleteUserHandler={dummy} />);
  expect(toJson(component)).toMatchSnapshot();
  expect(component.find(Loader).length).toEqual(1);

  component = shallow(<UsersComponent loadUsersAction={dummy} loadUsersHandler={dummy} deleteUserHandler={dummy} isLoaded={true} users={users} />)
  expect(toJson(component)).toMatchSnapshot();
  expect(component.find(UsersList).length).toEqual(1);
  expect(component.find(Loader).length).toEqual(0);
  expect(component.find(UsersList).prop('users')).toEqual(users);
});