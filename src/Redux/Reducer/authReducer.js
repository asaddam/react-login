const INITIAL_STATE = {
    username : ''
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SIGNIN':
            return{
                ...state,
                username: action.payload.username
            }
        case 'SIGNOUT':
            return INITIAL_STATE
        default:
            return state
    }
}

export default authReducer