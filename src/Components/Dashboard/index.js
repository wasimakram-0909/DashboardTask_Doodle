import React, { useState, Component } from "react";
import Table from "../Table";
import { Dropdown } from "primereact/dropdown";
import ChatBot from "../ChatBot/ChatBot";
import UserDetails from "../UserDetails/UserDetails";
import EditContact from "../EditContact/EditContact";
import { useSelector, useDispatch } from "react-redux";
import { actionUpdateKeyValueData } from "../../redux/actions";

const Dashboard = () => {
  let sortOpt = [
    { name: "Name", code: "NAME" },
    { name: "Company", code: "COM" },
    { name: "Date Created", code: "DT" },
  ];
  const dispatch = useDispatch();
  const [showEditContact, setShowEditContact] = useState(false);
  const [edit, setEdit] = useState(false);
  const [sort, setSort] = useState(sortOpt);
  const [showChatbot, setShowChatbot] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectdContact, setSelectedContact] = useState({});
  const [msgs, setMsgs] = useState([]);

  const initialState = {
    first_name: "",
    last_name: "",
    id: "",
    email: "",
    company: "",
  };

  let selectedContact = useSelector((state) => {
    let { ContactsList = {} } = state;
    return ContactsList.selectedContact && ContactsList.selectedContact;
  });

  let loggedUser = useSelector((state) => state.ContactsList.loggedUser);

  let contactsTableData = useSelector((state) =>
    state.ContactsList.contacts.filter(
      (item) => !(item.id.$oid == loggedUser.id)
    )
  );

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    dispatch(
      actionUpdateKeyValueData("searchedValue", e.target.value.toUpperCase())
    );
  };
  const handleClear = () => {
    setSearchValue("");
    dispatch(actionUpdateKeyValueData("searchedValue", ""));
  };
  var allContacts = useSelector((state) => state.ContactsList.contacts);

  const onSortChange = (opt) => {
    setSort(opt.value);
  };
  const getUserId = (id) => {
    let _selectedContact = allContacts.find((res) => res.id.$oid === id);
    setSelectedContact(_selectedContact);
  };
  const handleContact = () => {
    setShowEditContact(true);
    setEdit(false);
    setSelectedContact(initialState);
  };

  return (
    <div className="dashboard_container">
      <div className=" p-grid dashboard_contacts">
        <div className=" p-col-12 p-md-3 p-col-3 contacts_section">
          <div className="contacts_header">
            <i className="fa fa-address-book"></i>
            <div className="contacts_label">
              <p>Contacts</p>
              <span>Welcome to flatCRM contacts page</span>
            </div>
          </div>
        </div>
        <div className="p-col sort_section">
          <span className="label">Sort by:</span>
          <Dropdown
            value={sort}
            options={sortOpt}
            onChange={(e) => onSortChange(e)}
            placeholder="Select"
            optionLabel="name"
            className="header_right_item"
          />
        </div>
      </div>
      <div className="">
        <div className=" add-contact-class p-grid">
          <div className="add-search p-col-12 p-md-5 p-lg-5">
            <input
              onChange={(e) => handleSearch(e)}
              value={searchValue}
              type="text"
              className="input-tag"
              placeholder="Search Contact"
            ></input>
            {searchValue ? (
              <i
                className="fa fa-times add-search-icon"
                onClick={() => handleClear()}
              ></i>
            ) : (
              <i className="fa fa-search add-search-icon"></i>
            )}
          </div>
          <div className="add-contact-btn p-col-12 p-md-2 p-lg-2">
            <button
              type="submit"
              //  disabled={Object.keys(loggedUser).length ? false: true}
              onClick={() => handleContact()}
            >
              <i className="fa fa-plus icon"></i>
              <span className="label">Add Contact</span>
            </button>
          </div>
        </div>
      </div>
      <div className="p-grid dashboard_grid">
        <div className="dashboard_left p-col-12 p-md-7 p-lg-7">
          <Table
            showEdit={Object.keys(loggedUser).length ? true : false}
            setShowChatbot={setShowChatbot}
            tableData={contactsTableData || allContacts}
            setShowEditContact={setShowEditContact}
            setShowDetails={setShowDetails}
            getUserId={getUserId}
            setEdit={setEdit}
            setMsgs={setMsgs}
          ></Table>
        </div>
        <div className="dashboard_right p-col">
          {showChatbot ? (
            <ChatBot
              loggedUser={loggedUser}
              selectedContact={selectedContact}
              setShowChatbot={setShowChatbot}
              msgs={msgs}
              setMsgs={setMsgs}
            />
          ) : showDetails ? (
            <UserDetails
              selectedContact={selectedContact}
              setShowDetails={setShowDetails}
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <EditContact
        edit={edit}
        selectdContact={selectdContact}
        showEditContact={showEditContact}
        setShowEditContact={setShowEditContact}
      />
    </div>
  );
};
export default Dashboard;
