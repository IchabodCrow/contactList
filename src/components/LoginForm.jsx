import React, { Component } from 'react';

import history from '../history/history';
import { 
  Input, 
  Button, 
  LoginFormBox, 
  LegendForm 
} from '../styles/styles';

class LoginForm extends Component {

  state = {
    user: {
      email: '',
      password: '',
    },
  };

  getUserData = (event) => {
    event.preventDefault();
    const user = this.state.user;
    this.props.saveUser(user).then(() => history.push('/'))
  };

  onChange = (event) => {
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value,
      },
    });
  };

  render() {
    return (
      <LoginFormBox onSubmit={this.getUserData}>
        <LegendForm>Sign in</LegendForm>
        <Input
          type='email'
          onChange={this.onChange}
          name={'email'}
          value={this.state.user.login}
          placeholder={'Email'}
        />
        <Input
          type='password'
          onChange={this.onChange}
          name={'password'}
          value={this.state.user.password}
          placeholder={'Password'}
        />

        <Button>Sign in</Button>
        <Button>Sign up</Button>
      </LoginFormBox>
    );
  }
}

export default LoginForm;
