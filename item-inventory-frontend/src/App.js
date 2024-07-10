import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import { createContext } from 'react';
// import { useAuth0 } from '@auth0/auth0-react';
import { UserLog } from './UserLog';
import Homepage from './Homepage'
import LoginPage from './LoginPage'
import UserPage from './UserPage'
import ItemPage from './ItemPage'
import NewItem from './NewItem'
import Login from './Login';
import Dashboard from './Dashboard';
import LoggingIn from './Components/LoggingIn';
import LoggingOut from './Components/LoggingOut';

export const UserContext = createContext();

// import LoginButton from './LoginButton'
// import LogoutButton from './LogoutButton'
// import styled from "styled-components";

function App() {

  const [user, setUser] = useState(null);

  const handleLogout = async () => {
    await axios.post('http://localhost:8081/logout');
    setUser(null);
  };


  // const [loggedInUser, setLoggedInUser] = useState({});
  // // const { user, isAuthenticated } = useAuth0();


  // useEffect(() => {
  //   fetch('http://localhost:8081/users')
  //     .then(response => response.json())
  //     .then(data => {
  //       setLoggedInUser(data)

  //     })
  // }, [loggedInUser])


  return (
<>
<div>
      {user ? (
        <div>
          <h2>Welcome, {user.name}</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <LoggingIn setUser={setUser} />
      )}
    </div>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path='/login' element={<Homepage />} /> */}
        <Route path='/createaccount' element={<LoginPage />} />
        <Route path='/user/:id' element={<UserPage />} />
        <Route path='/inventory' element={<ItemPage />} />
        <Route path='/add/item' element={<NewItem />} />
        {/* Add more routes as needed */}
      </Routes>



   </>

  )
}

export default App;
