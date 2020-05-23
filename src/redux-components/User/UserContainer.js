import * as userType from './UserType';
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import * as userActions from './UserActions';

const UserContainer = ({ userData, fetchUsers }) => {
    useEffect(() => {
        fetchUsers()
      }, [])
      return userData.loading ? (
        <h2>Loading</h2>
      ) : userData.error ? (
        <h2>{userData.error}</h2>
      ) : (
        <div>
          <h2>Users List</h2>
          <div>
            {userData &&
              userData.users &&
              userData.users.map(user => <p>{user.name}</p>)}
          </div>
        </div>
      )
    }
const mapStateToProps = state => {
    return {
        userData: state.usr
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(userActions.fetchUsers())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);