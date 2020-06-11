import { SET_USER_DATA } from '../actions/actions'

const initialState = {
        user: {
            login: 'Bob',
            password: '123'
        }
}

const signInReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USER_DATA : 
            return {
                ...state,
                ...action.data
            }
        case GET_USER_DATA : 
            return {
                ...state,
                user: action.loginUser
            }
        default : 
            return state
    }
}
const GET_USER_DATA = 'GET_USER_DATA';
export const userValueCreator = (user) => ({
    type: GET_USER_DATA,
    loginUser : user,
  });
  

export default signInReducer




