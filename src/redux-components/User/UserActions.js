import * as userType from './UserType';
import Axios from 'axios';
export const fetchUserRequest = () =>{
    return{
        type: userType.FETCH_USER_REQUEST,
        loading: true
    }
}
export const fetchUserSuccess = (users) =>{
    return{
        type:userType.FETCH_USER_SUCCESS,
        userData:users,
        loading:false
    }
}
export const fetchUserError = (error) => {
    return {
        type:userType.FETCH_USER_ERROR,
        error:error,
        loading:false
    }
}
export const fetchUsers = (dispatch) => {
    dispatch(fetchUserRequest);
    Axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        dispatch(fetchUserSuccess(response.data))
    })
    .catch(error => {
        dispatch(fetchUserError(error))
    })
}