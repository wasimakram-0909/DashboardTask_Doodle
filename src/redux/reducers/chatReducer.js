import { SENT_MESSAGE, GET_MESSAGES} from "../constants";

const initialState = {
    contacts:{},
    messages:[]
}

export default function ChatReducer (state = initialState,action){

    switch (action.type) {
        case SENT_MESSAGE:
            
            return{
                ...state,
                messages:[...state.messages,action.payload]
            }
        case GET_MESSAGES:
            return{
                ...state,
                contacts:action.payload,
                messages:[]
            }
    
        default:
            return state;
    }
}