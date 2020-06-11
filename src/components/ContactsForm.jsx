import React, { Component } from 'react';

import { Input, Button } from '../styles/styles';

class ContactsForm extends Component {
  state = {
    contact: {
      ...this.props.contact,
    },
  };

  onChange = (event) => {
    this.setState({
      contact: {
        ...this.state.contact,
        [event.target.name]: event.target.value,
      },
    });
  };

  handelSave = () => {
    this.props.handleSave(this.state.contact);
  };

  render() {
    return (
      <div>
        <Input
          name='name'
          onChange={this.onChange}
          value={this.state.contact.name}
          placeholder={'Name'}
        />
        <Input
          name='surname'
          onChange={this.onChange}
          value={this.state.contact.surname}
          placeholder={'Surname'}
        />
        <Input
          name='age'
          onChange={this.onChange}
          type={'number'}
          value={this.state.contact.age}
          placeholder={'Age'}
        />
        <Input
          name='number'
          onChange={this.onChange}
          value={this.state.contact.number}
          placeholder={'Number'}
        />
        <Button type={'button'} onClick={this.handelSave}>
          Save
        </Button>
      </div>
    );
  }
}

export default ContactsForm;
