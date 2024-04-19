import * as React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route, Router } from 'react-router-dom';
// import { useAuth0 } from '@auth0/auth0-react';
import { UserLog } from './UserLog';
import Homepage from './Homepage'
import LoginPage from './LoginPage'
import UserPage from './UserPage'
// import LoginButton from './LoginButton'
// import LogoutButton from './LogoutButton'
// import styled from "styled-components";

function App() {

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

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/user' element={<UserPage />} />
      </Routes>




  )
}

export default App;
