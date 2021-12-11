import React, { Fragment, useContext, useEffect } from "react";
import ContactItem from "./ContactItem";
import Spinner from "../layout/Spinner";
import ContactContext from "../../context/contact/contactContext";

const Contacts = () => {
  // Accepts a context object (the value returned from React.createContext) and returns the current context value for that context. The current context value is determined by the value prop of the nearest <MyContext.Provider> above the calling component in the tree.
  const contactContext = useContext(ContactContext);
  // Destructs contacts array out of context object value.
  const { contacts, filtered, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts();
    // eslint disable-next-line
  }, []);

  if (contacts !== null && contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }

  return (
    <Fragment>
      {contacts !== null && !loading ? (
        <Fragment>
          {filtered !== null
            ? filtered.map((contact) => (
                <div key={contact._id} className="item">
                  <ContactItem contact={contact} />
                </div>
              ))
            : contacts.map((contact) => (
                <div key={contact._id} className="item">
                  <ContactItem contact={contact} />
                </div>
              ))}
          {/* Prints out name for each array index.
                Common source of error is adding brackets instead of parethesis
                for the JSX element. */}
        </Fragment>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Contacts;
