import * as userType from './UserType';
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import * as userActions from './UserActions';

const UserContainer = ({ userData, fetchUsers }) => {
    useEffect(() => {
        fetchUsers();
    }, []);
    return (
        <div>
            <div>
                users List
        </div>
            <div>
                {userData.map((user) => <p> {user.name} </p>)}
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        userData: state.usr.users
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(userActions.fetchUsers())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);