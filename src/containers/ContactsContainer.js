import { connect } from 'react-redux'

import Contacts from '../components/Contacts'
import { contactsFetchData, editingContact, newContact, deleteContact } from '../actions/actions'

const mapStateToProps = state => {
    return {
        contacts: state.contacts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: url => dispatch(contactsFetchData(url)),
        newContact: contact => dispatch(newContact(contact)),
        deleteContact: id => dispatch(deleteContact(id)),
        editingContact: contact => dispatch(editingContact(contact)),
    }
}

const ContactsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Contacts)

export default ContactsContainer