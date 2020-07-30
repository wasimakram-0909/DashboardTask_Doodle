import React, { useState, useEffect } from "react";
import { Dropdown } from "primereact/dropdown";
import { useSelector ,useDispatch} from "react-redux";
import {actionLoginUser} from "../../redux/actions";


const Header = () => {

  const dispatch = useDispatch();
  const [user, setUser] = useState();

  const allContacts = useSelector((state)=>{
    return state.ContactsList.contacts && state.ContactsList.contacts.map((item)=>{
      return({name:item.first_name+" "+item.last_name,id:item.id.$oid,color:item.color})
    })
  });

  return (
    <div className="headerContainer">
      <div className="top-menu top-menu-search">
        <span className="header-search">
          <i className="fa fa-search"></i>
          <input type="text" placeholder="Search"></input>
        </span>
      </div>
      <div className="top-menu">
        <div className="header-right">
          <ul className="header-nav">
            <li className="header-nav-item">
              <i className="fa fa-plus add-icon"></i>
              Add
            </li>
            <li  className="header-nav-item">
              <i className="fa fa-envelope-o"></i>
            </li>
            <li  className="header-nav-item">
              <Dropdown
                value={user}
                options={allContacts}
                onChange={(e) => {
                  setUser(e.value);
                  dispatch(actionLoginUser(e.value));
                }}
                placeholder="Sign in"
                optionLabel="name"
                className="header-right-item"
              />
            </li>
            <li  className="header-nav-item">
              <i className="fa fa-bell-o"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
