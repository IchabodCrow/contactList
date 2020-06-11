import { connect } from 'react-redux'

import LoginForm from '../components/LoginForm'
import { userValueCreator } from '../reducers/reducer-fetch'
import { signInFetch } from '../actions/actions'



const mapStateToProps = state => {
    return {
        user: state.reduceUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signIn: user => dispatch(userValueCreator(user)),
        saveUser: user => dispatch(signInFetch(user))      
    }  
}

const LoginContainer =  connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginForm)

export default LoginContainer