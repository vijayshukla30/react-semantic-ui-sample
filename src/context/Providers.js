import React, { createContext, useReducer } from "react";
import authInitialState from "./initialstates/authInitialState";
import contactInitialState from "./initialstates/contactInitialState";
import auth from "./reducers/auth";
import contact from "./reducers/contact";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);
  const [contactsState, contactsDispatch] = useReducer(
    contact,
    contactInitialState
  );

  return (
    <GlobalContext.Provider
      value={{
        authState,
        authDispatch,
        contactsState,
        contactsDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
