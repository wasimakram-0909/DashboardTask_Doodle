import React, {useEffect,useState} from "react";
import { useSelector, useDispatch } from "react-redux";

const ChatBot = (props)=>{
    const dispatch = useDispatch();
    let { setShowChatbot , selectedContact = {}, loggedUser = {},setMsgs, msgs} = props;
    let { first_name = "", last_name = "", color="" } = selectedContact;
    // let chatArr = [];
    let userName = loggedUser.name.split(" ");

    let chatMsgs = useSelector(state=> state.Chats.messages);


    const scrollBottom = ()=>{
        document.getElementById('bot_id').scrollTop = document.getElementById('bot_id').scrollHeight;
    }
    const [chat, setChat] = useState("");

    const handleSend = (e)=>{
        e.preventDefault();
        let _msgs = [...msgs];
        chat && _msgs.push(chat);
        setMsgs(_msgs);
        setChat("");
    }
    useEffect(()=>{
        scrollBottom();
    },[msgs]);

    return(
        <div className="chatbot-container">
            <div className="bot-header">
                <div className="user-avatar" style={{background:`${color}`}}>
                    {first_name[0]+last_name[0]}
                </div>
                <div>
                    {first_name+" "+last_name}
                </div>
            </div>
            <div className="bot-body" id="bot_id">
                <div className="rec-msg">
                    <div className="user-avatar" style={{background:`${color}`}}>{first_name[0]+last_name[0]}</div>
                    <div className="chat-msg">
                        <p>Hi, {`${userName[0]}`}</p>
                    </div>
                </div>
                <div>
                {
                    msgs.map((msg,index)=>{
                        return(
                            <div className="sent-msg" key={index}>
                                <div className="user-avatar" style={{ background:`${ loggedUser.color}`}}>{userName[0][0]+userName[1][0]}</div>
                                <div className="chat-msg">
                                    <p>{msg}</p>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
            <form className="bot-footer">
                <input value={chat} placeholder="Enter your message..." onChange={(e)=>setChat(e.target.value)} className="bot-input"/>
                <button type="submit" className="send-btn" onClick={(e)=>handleSend(e)}>Send</button>
            </form>
            <i className="fa fa-times close-icon" onClick={()=>setShowChatbot && setShowChatbot(false)} ></i>
        </div>
    )
}
export default ChatBot;