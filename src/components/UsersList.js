import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

const UsersList = ({users, onUserClickHandler}) => (
  <div>
    {users.map(user => (
      <User user={user} onClickHandler={onUserClickHandler} key={user.id} />
    ))}
  </div>
);

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired
  })).isRequired,
  onUserClickHandler: PropTypes.func.isRequired
};

export default UsersList;