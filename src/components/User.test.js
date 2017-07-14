import React from 'react';
import User from './User';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

const user = {
  id: 1,
  email: 'user1@example.com'
};

test('snapshot', () => {
  const component = shallow(
    <User user={user} onClickHandler={() => {}}/>
  );

  expect(toJson(component)).toMatchSnapshot();
});

test('click', () => {
  const onClick = jest.fn();
  const component = shallow(<User user={user} onClickHandler={onClick} />);
  component.simulate('click');

  expect(onClick).toHaveBeenCalledTimes(1);
  expect(onClick).toHaveBeenCalledWith(user);
});

