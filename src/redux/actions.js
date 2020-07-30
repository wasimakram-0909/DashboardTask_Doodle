import { 
    ADD_NEW_CONTACT,
    STORE_CONTACTS, 
    EDIT_CONTACT, 
    DELETE_CONTACT, 
    LOGIN_USER,
    SENT_MESSAGE,
    GENERIC_ACTION,
    GET_MESSAGES
} from "./constants";

export const actionStoreContacts = (contactsList) => {

    return({
        type:STORE_CONTACTS,
        payload: contactsList
    })
} 

export const actionUpdateKeyValueData = (key,value) => {
    return({
        type:GENERIC_ACTION,
        key: key,
        value: value
    })
} 

export const actionLoginUser = (user) => {
    // console.log(user,"action");

    return({
        type:LOGIN_USER,
        payload:user
    })
}

export const actionCreateNewContact = (newContact) => {
    return({
        type:ADD_NEW_CONTACT,
        payload:newContact
    })
}
 
export const actionUpdateContact = (contact) => {
 
    let array = [];
    array.push(contact)
    return({
        type:EDIT_CONTACT,
        payload:array
    })
}
 
export const actionDeleteContact = (deleteContact) => {

    return({
        type:DELETE_CONTACT,
        payload:deleteContact
    })
}