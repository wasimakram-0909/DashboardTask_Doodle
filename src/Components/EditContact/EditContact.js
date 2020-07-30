import React,{ useState,useEffect } from "react"
import {actionCreateNewContact, actionUpdateContact} from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const EditContact = (props) => {
	const dispatch = useDispatch();
	let {showEditContact, setShowEditContact, selectdContact,edit} = props;

	useEffect(()=>{
		setNewContact(selectdContact);
	},[selectdContact]);
	let allContacts = useSelector(state=>state.ContactsList.contacts);
		
	const [newContact, setNewContact] = useState(selectdContact);
	const [err, setErr] = useState(false);
	const handleChange = event =>{
		let {name, value} = event.target;
		setNewContact({...newContact,[name]:value});
	}
	const onSave = () =>{
		let {last_name,first_name,email,company,id} = newContact;
		if(last_name && first_name && email && company){
			edit ? dispatch(actionUpdateContact(newContact)) : 
			dispatch(actionCreateNewContact({...newContact,"id":{"$oid":allContacts[allContacts.length-1] &&allContacts[allContacts.length-1].id.$oid+1}}))
			setErr(false);
			setShowEditContact(false);
			setNewContact(selectdContact);
		}else{
			setErr(true);
		}
	}
  return (
    <div className="modal p-grid" style={{display: showEditContact ? 'block' : 'none'}}>
		<div className="modal-content p-col-10 p-md-6 p-lg-4">
			<div className="modal-header">
				<span className="close fa fa-times" onClick={()=>setShowEditContact(false)}> </span>
					<p>{edit?"Edit contact":"Add new contact"}</p>
				</div>
					<form className="modal-body"> 
						<input placeholder="First Name" type="text" value={newContact.first_name} className="formItem" name="first_name" onChange={(e)=>handleChange(e)}/>
						<input placeholder="Last Name" type="text" value={newContact.last_name} className="formItem" name="last_name" onChange={(e)=>handleChange(e)}/>
						<input placeholder="Email" type="email" value={newContact.email} className="formItem" name="email" onChange={(e)=>handleChange(e)}/>
						<input placeholder="Company" type="text" value={newContact.company} className="formItem" name="company" onChange={(e)=>handleChange(e)}/>
						{err ? <span className="err" >Please enter all details</span>:""}
					</form>
				<div className="modal-footer">
				<span className="footer-btn save-btn" onClick={()=>onSave()}>Save</span>
				<span className="footer-btn cancel-btn" onClick={()=>setShowEditContact(false)}>Cancel</span>
			</div>
		</div>
    </div>
  );
};
export default EditContact;