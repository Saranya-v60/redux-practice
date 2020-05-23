const initialState = {
    users: [],
    error: {},
    loading: true
}
export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_USER_REQUEST": return {
            ...state,
            loading: action.loading
        }
        case "FETCH_USER_SUCCESS": return {
            ...state,
            loading: action.loading,
            users: action.users
        }
        case "FETCH_USER_ERROR": return {
            ...state,
            loading: action.loading,
            error: action.error
        }
    }
}