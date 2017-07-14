import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {loadUsersAction, deleteUserAction} from '../store/actions';
import Loader from './Loader';
import UsersList from './UsersList';

export const UsersComponent = ({isLoading = false, isLoaded = false, canLoad = false, users = [], loadUsersHandler, deleteUserHandler}) => (
  <div>
    <h1>USERS</h1>
    {isLoading && <Loader />}
    {users.length > 0 && <UsersList users={users} onUserClickHandler={deleteUserHandler} />}
    {canLoad && <button onClick={() => loadUsersHandler()}>load users</button>}
  </div>
);

UsersComponent.propTypes = {
  isLoading: PropTypes.bool,
  isLoaded: PropTypes.bool,
  canLoad: PropTypes.bool,
  users: PropTypes.array,
  loadUsersHandler: PropTypes.func.isRequired,
  deleteUserHandler: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  isLoading: state.loading,
  isLoaded: state.loaded,
  canLoad: !state.loading && state.data.length === 0,
  users: state.data
});

const mapDispatchToProps = {
  loadUsersHandler: loadUsersAction,
  deleteUserHandler: deleteUserAction
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersComponent);