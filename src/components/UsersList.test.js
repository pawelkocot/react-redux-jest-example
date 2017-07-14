import React from 'react';
import UsersList from './UsersList';
import User from './User';
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
  const component = shallow(
    <UsersList users={users} onUserClickHandler={() => {}} />
  );

  expect(toJson(component)).toMatchSnapshot();
});

test('length', () => {
  let component = shallow(<UsersList users={users} onUserClickHandler={() => {}} />);

  expect(component.find(User)).toHaveLength(2);

  component = shallow(<UsersList users={[]} onUserClickHandler={() => {}} />);

  expect(component.find(User)).toHaveLength(0);
});

