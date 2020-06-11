import { token } from '../App';
import authServices from '../services/authServices';

export const CONTACTS_FETCH_DATA_SUCCESS = 'CONTACTS_FETCH_DATA_SUCCESS';
export const EDITING_CONTACT_DATA = 'EDITING_CONTACT_DATA';
export const DELETE_CONTACT_SUCCESS = 'DELETE_CONTACT_SUCCESS';
export const SET_USER_DATA = 'SET_USER_DATA';
export const NEW_CONTACT_SUCCESS = 'NEW_CONTACT_SUCCESS';
export const NEW_CONTACTS_TEXT = 'NEW_CONTACTS_TEXT';

export const editingContact = (contact) => {
  return (dispatch) => {
    fetch('http://localhost:4000/contacts/' + contact.id, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer'
      },
      body: JSON.stringify(contact),
    })
      .then((response) => response.json())
      .then((response) => dispatch(editingContactSuccess(response)))
      .catch((error) => console.log(error));
  };
};

export const editingContactSuccess = (contact) => {
  return {
    type: EDITING_CONTACT_DATA,
    contact,
  };
};

export const contactsFetchData = (url) => {
  return (dispatch) => {
    fetch(url, {
      headers: {
        'Content-type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((contacts) => dispatch(contactsFetchDataSuccess(contacts)));
  };
};

export const contactsFetchDataSuccess = (contacts) => {
  return {
    type: CONTACTS_FETCH_DATA_SUCCESS,
    contacts,
  };
};

export const deleteContact = (id) => {
  return (dispatch) => {
    fetch('http://localhost:4000/contacts/' + id, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then(() => dispatch(deleteContactSeccess(id)))
      .catch((error) => console.log(error));
  };
};

export const deleteContactSeccess = (id) => {
  return {
    type: DELETE_CONTACT_SUCCESS,
    id,
  };
};

export const newContact = (contact) => {
  return (dispatch) => {
    return fetch('http://localhost:4000/contacts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(contact),
    })
      .then((response) => response.json())
      .then((newContact) => {
        dispatch(newContactSuccess(newContact));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const newContactSuccess = (newContact) => {
  return {
    type: NEW_CONTACT_SUCCESS,
    newContact,
  };
};

export const signInFetch = (user) => {
  return (dispatch) => {
    return fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((response) => {
        if (typeof response !== 'string') {
          authServices.loggedIn(response)
          dispatch(setAuthUserData(response));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const setAuthUserData = (user) => ({
  type: SET_USER_DATA,
  user,
});
