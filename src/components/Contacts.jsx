import React, { Component } from 'react';

import ContactsForm from './ContactsForm';
import SearchContact from './SearchContact';
import {
  Button,
  ContactCard,
  ContactCardRow,
  ContactCardText,
  CardInputsForm,
  NewContactCard,
} from '../styles/styles';

class Contacts extends Component {
  state = {
    editing: '',
    findValue: '',
    searchedContactIds: null,
  };

  componentDidMount = () => {
    this.props.fetchData('http://localhost:4000/contacts');
  };

  updateData = (value) => {
    this.setState({
      searchedContactIds: value,
    });
  };

  editUserInput = (id) => {
    this.setState({
      editing: id,
    });
  };

  resetContactList = () => {
    this.setState({
      searchedContactIds: null,
    });
  };

  handleSave = (contact) => {
    if (contact.id) {
      this.setState({
        editing: '',
      });
      this.props.editingContact(contact);
    } else {
      return this.props.newContact(contact);
    }
  };

  showMessageNotFound = () => {};

  deleteContact = (id) => {
    this.props.deleteContact(id);
  };

  render() {
    const { searchedContactIds, editing } = this.state;
    const { contacts } = this.props;

    return (
      <div>
        <SearchContact
          resetContactList={this.resetContactList}
          updateData={this.updateData}
          contacts={contacts}
        />
        <NewContactCard>
          <div>Create a new contact</div>

          <ContactsForm handleSave={this.handleSave} />
        </NewContactCard>

        {contacts.map((contact, index) => {
          const editingRow = contact.id == editing;
          return (
            (!searchedContactIds ||
              searchedContactIds.includes(contact.id)) && (
              <ContactCard>
                <div>
                  <div>
                    <ContactCardRow>Name is: </ContactCardRow>
                    <ContactCardText>{contact.name}</ContactCardText>
                  </div>
                  <div>
                    <ContactCardRow>Surname is: </ContactCardRow>
                    <ContactCardText>{contact.surname}</ContactCardText>
                  </div>
                  <div>
                    <ContactCardRow>Age is: </ContactCardRow>
                    <ContactCardText>{contact.age}</ContactCardText>
                  </div>
                  <div>
                    <ContactCardRow>Number is: </ContactCardRow>
                    <ContactCardText>{contact.number}</ContactCardText>
                  </div>
                  <div>
                    <Button
                      onClick={() => {
                        this.deleteContact(contact.id);
                      }}
                    >
                      Delete
                    </Button>
                    <Button
                      onClick={() => {
                        this.editUserInput(contact.id);
                      }}
                    >
                      Edit
                    </Button>
                  </div>
                </div>
                {editingRow && (
                  <CardInputsForm>
                    <ContactsForm
                      handleSave={this.handleSave}
                      contact={contact}
                    />
                  </CardInputsForm>
                )}
              </ContactCard>
            )
          );
        })}
      </div>
    );
  }
}

export default Contacts;
