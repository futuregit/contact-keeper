import React, { Fragment, useContext } from 'react';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
    // Accepts a context object (the value returned from React.createContext) and returns the current context value for that context. The current context value is determined by the value prop of the nearest <MyContext.Provider> above the calling component in the tree.
    const contactContext = useContext(ContactContext);
    // Destructs contacts array out of context object value.
    const { contacts } = contactContext;

    return (
        <Fragment>
            {/* Prints out name for each array index.
                Common source of error is adding brackets instead of parethesis
                for the JSX element. */}
            {contacts.map(contact => (
                <ContactItem key={contact.id} contact={contact} />
            ))}
        </Fragment>
    )
};

export default Contacts;
