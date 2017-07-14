import React from 'react';
import PropTypes from 'prop-types';


const User = ({user, onClickHandler}) => (
  <div onClick={() => onClickHandler(user)}>{`${user.id} ${user.email}`}</div>
);

User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired,
  onClickHandler: PropTypes.func.isRequired
};

export default User;