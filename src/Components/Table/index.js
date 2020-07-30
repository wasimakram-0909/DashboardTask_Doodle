import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionUpdateKeyValueData, actionDeleteContact } from "../../redux/actions";

const Table = (props) => {
  const dispatch = useDispatch();
  let {
    tableData = [],
    setShowEditContact,
    setShowDetails,
    setShowChatbot,
    getUserId,
    setEdit,
    showEdit = false,
    setMsgs
  } = props;
  const [deleteContacts, setDeleteContacts] = useState([]);
  //   console.log(tableData, "tableData in table");

  const handleCheckbox = (e, ind) => {
    if (e.target.checked) {
      setDeleteContacts([...deleteContacts, e.target.value]);
    } else {
        let val = deleteContacts.filter((res) => res !== e.target.value);
        setDeleteContacts(val);
    }
  };
  
  // search Functionality

  // let contactsTableData = useSelector((state) => {
  //   let searcedVal = state.ContactsList.searchedValue;
  //   console.log(searcedVal,"searcedVal");
  //   if(searcedVal){
  //       res => Object.keys(res).filter(
  //         res2 => {
  //           return typeof(res[res2]) === "string" ? console.log("matched",res[res2].toUpperCase() === searcedVal) : ""
  //           }
  //         )
  //       ))
  //   }else{return tableData}
  // });

    const handleDelete = () => {
      if(deleteContacts.length){
        console.log("deleated")
          dispatch(actionDeleteContact(deleteContacts))
          setDeleteContacts([]);
      }
    };
  return (
    <table className="contacts_table">
      <thead>
        <tr>
          <th>
            <i
              className="fa fa-trash header-action-icon"
              onClick={() => handleDelete()}
            ></i>
          </th>
          <th>Basic info</th>
          <th>Company</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {tableData.length &&
          tableData.map((item, ind) => {
            return (
              <tr key={item.id.$oid}>
                <td>
                  <input
                    type="checkbox"
                    className="ml-1 mt-2"
                    style={{ cursor: "pointer" }}
                    value={item.id.$oid}
                    onChange={(e) => {
                      handleCheckbox(e, ind);
                    }}
                  />
                </td>
                <td className="contact_details">
                  <div
                    className="nameText"
                    style={{ backgroundColor: `${item.color||"#ccc"}` }}
                  >
                    {item.first_name[0] + item.last_name[0]}
                  </div>
                  <div
                    className="contact_info"
                    onClick={() => {
                      dispatch(
                        actionUpdateKeyValueData("selectedContact", item)
                      );
                      setShowChatbot && setShowChatbot(false);
                      setShowDetails && setShowDetails(true);
                    }}
                  >
                    <div className="contact_name">
                      {item.first_name + " " + item.last_name}
                    </div>
                    <small className="contact_email">{item.email}</small>
                  </div>
                </td>
                <td>{item.company}</td>
                <td>
                  <div className="contact-actions">
                    <i
                      className="fa fa-pencil action-icon"
                      onClick={() => {
                        getUserId(item.id.$oid);
                        setEdit(true);
                        setShowEditContact && setShowEditContact(true);
                      }}
                    ></i>
                    {showEdit ? (
                      <i
                        className="fa fa-comment action-icon"
                        onClick={() => {
                          dispatch(
                            actionUpdateKeyValueData("selectedContact", item)
                          );
                          setShowChatbot && setShowDetails(false);
                          setShowChatbot && setShowChatbot(true);
                          setMsgs([])
                        }}
                      ></i>
                    ) : (
                      ""
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};
export default Table;
