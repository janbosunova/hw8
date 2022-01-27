import React, { Fragment, useState } from 'react';
// import Wrapper from './components/Helpers';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/Userlist';


function App() {
  const [users, setUsers]=useState([])
  const addUserHandler = (name, age)=>{
    setUsers([...users, {name,age, id:Math.random().toString() }])
  }
  const getdataHandler = (data) =>{
     setUsers(data)
  }

  return (
    <Fragment>
      <AddUser onAddUser = {addUserHandler}/>
      <UserList onGetData = {getdataHandler} users = {users}/>    
    </Fragment>
  );
}

export default App;
