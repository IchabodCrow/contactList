import React, { Component } from 'react';
import { Redirect } from 'react-router';
import authServices from '../../services/authServices';

class PrivateLayout extends Component {

  render() {
    return (
        <div>
            { authServices.chekingLiveToken() ? this.props.children : <Redirect to='/login'/>}
        </div>
    )
       
  }
}

export default PrivateLayout;
