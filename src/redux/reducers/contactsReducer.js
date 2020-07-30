import { 
    ADD_NEW_CONTACT,
    STORE_CONTACTS, 
    EDIT_CONTACT, 
    DELETE_CONTACT, 
    LOGIN_USER,
    GENERIC_ACTION
} from "../constants";

const initialState = {
    contacts:[],
    loggedUser:[],
    selectedContact:{},
    searchedValue:""
}

export default function ContactsReducer  (state = initialState,action)  {
    switch (action.type) {
        case STORE_CONTACTS:
            return { 
                    ...state,
                    contacts:action.payload 
                }
        case GENERIC_ACTION:
            return { 
                    ...state,
                    [action.key]:action.value 
                }
        case ADD_NEW_CONTACT:
            return { 
                    ...state,
                    contacts:[...state.contacts,action.payload]
                }
        case EDIT_CONTACT:
            return {
                ...state,
                contacts:state.contacts.map(res => (action.payload).find(data => data.id.$oid === res.id.$oid) || res)
            }
        case DELETE_CONTACT:
            return{
                ...state,
                contacts:state.contacts.filter(res => !(action.payload).filter(data => data === res.id.$oid).length)
            }
        case LOGIN_USER:
            return{
                ...state,
                loggedUser:action.payload
            }
        default:
            return state
    }
}