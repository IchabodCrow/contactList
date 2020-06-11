import {
    CONTACTS_FETCH_DATA_SUCCESS,
    EDITING_CONTACT_DATA, 
    DELETE_CONTACT_SUCCESS, 
    NEW_CONTACT_SUCCESS  
} from '../actions/actions';

const contacts = ( state = [], action ) => {
    switch(action.type){

        case CONTACTS_FETCH_DATA_SUCCESS: 
            return action.contacts
            
        case NEW_CONTACT_SUCCESS: 
    
            return [...state, action.newContact]

        case DELETE_CONTACT_SUCCESS:
            return [...state.filter(contact => contact.id !== action.id)]

        case EDITING_CONTACT_DATA:
            return [...state.map(obj => obj.id === action.contact.id ? obj = action.contact : obj)]
        default:
            return state
    }
}

export default contacts