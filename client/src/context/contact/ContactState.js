// An alternative to useState. Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method. 
import { Types } from 'mongoose';
import React, { useReducer } from 'react';
// UUID (Universal Unique Identifier) is a 16-byte unique value. You can use UUID as an identifier for objects. UUID is indexable and you can use it as a primary key.
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Mary Johnson',
                email: 'MJohsnon@email.com',
                phone: '111-111-1111',
                type: 'personal'
            },
            {
                id: 2,
                name: 'Fred Johnson',
                email: 'FJohsnon@email.com',
                phone: '111-111-2222',
                type: 'personal'
            },
            {
                id: 3,
                name: 'Barry Johnson',
                email: 'BJohsnon@email.com',
                phone: '222-222-2222',
                type: 'personal'
            }
        ]
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add Contact

    // Delete Contact

    // Set Current Contact

    // Clear Current Contact

    // Update Contact

    // Filter Contacts

    // Clear Filter

    return (
        // Use the state contacts array as the value.
        <ContactContext.Provider 
            value={{
                contacts: state.contacts
            }}
        >
            { props.children }
        </ContactContext.Provider>
    )
};

export default ContactState;