import React from "react"
const UserDetails = (userData)=>{
    let { setShowDetails , selectedContact} = userData;
    let { first_name = "", last_name = "", email = "", company ="",gender="", color="" } = selectedContact;
    return(
        <div className="details-container">
            <div className="details-header">
                <div className="details-avatar" style={{background:`${color || "#c1c0c0"}`}}>{first_name[0]+last_name[0]}</div>
                <h2 className="detail-name">{first_name + " " + last_name}</h2>
                <p className="details-info">{email}</p>
            </div>
            <div  className="details-data">
                <div className="details-label name">Full Name :</div>
                <div className="details-label-data">{first_name + " " + last_name}</div>
                <div className="details-label name">Gender :</div>
                <div className="details-label-data">{gender}</div> 
                <div className="details-label name">Email :</div>
                <div className="details-label-data">{email}</div> 
                <div className="details-label name">Company :</div>
                <div className="details-label-data">{company}</div>

            </div>
            <i className="fa fa-times close-icon" onClick={()=>{setShowDetails && setShowDetails(false)}}></i>
        </div>
    )
}
export default UserDetails;