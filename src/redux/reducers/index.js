// import React from "react";
import { combineReducers } from 'redux';
import ChatReducer from "./chatReducer";
import ContactsReducer from "./contactsReducer"

export default combineReducers({
  ContactsList:ContactsReducer,
  Chats:ChatReducer,
})