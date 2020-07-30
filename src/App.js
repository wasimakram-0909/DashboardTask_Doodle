import React, {useEffect} from 'react';
import './App.css';
import Header from "./Components/Header";
import SideNav from "./Components/SideNav";
import Dashboard from "./Components/Dashboard";
import { actionStoreContacts } from "./redux/actions";
import { useDispatch } from 'react-redux';
import ContactsData from "./Assets/Data.json";

function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(actionStoreContacts(ContactsData));
  },[])

  return (
    <div className="App">
      <Header></Header>
      <SideNav></SideNav>
      <Dashboard />
    </div>
  );
}

export default App;
