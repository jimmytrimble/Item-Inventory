import React, { useState, useEffect, useContext } from 'react';
import { css, styled } from 'styled-components';
// import LoginForm from './LoginForm';
import { useAuth0 } from '@auth0/auth0-react';
import { UserLog } from './UserLog';
import { useNavigate } from 'react-router-dom';


const StyledDiv = styled.div`
    display: flex;
    flex-flow: column;
    justify-content:center;
    justify-items: center;
    align-content:center;
    align-items: center;
    padding: 10px;
    gap: 10px;
    margin: 20px;
`
const StyledUL = styled.ul`
display: flex;
    flex-flow: column;
    justify-content:center;
    justify-items: center;
    align-content:center;
    align-items: center;
    padding: 10px;
    gap: 10px;
    margin: 20px;
`
const NewGift = styled.div`
    display: flex;
    flex-flow: column;
    justify-content:center
    justify-items: center;
    align-content:center;
    align-items: center;
    padding: 10px;
    gap: 15px;
    margin-left: 20%;
    margin-right: 20%;
    background-color: #f9a852;
    border: 2px solid white;
`

const InnerDiv = styled.div`
    display: flex;
    justify-content:center
    justify-items: center;
    align-content:center;
    align-items: center;
`

const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items: center;
    color: white;
    border-radius: 3px;
    border: 2px solid #BF4F74;
    background-color: #BF4F74;
    margin: 2px;
    padding: 5px;
    width: 75px;
`

const StyledIcon = styled.button`
    display: flex;
    flex-flow: row;
    justify-content: center
    justify-items: center;
    align-content: center;
    align-items: center;
    color: white;
    border-radius: 3px;
    border: 2px solid white;
    background-color: #56c1ab;
`
const StyledHeader = styled.h1`
    display: flex;
    justify-content: center;
    justify-items: center;
    align-content:center;
    align-items: center;
    color:#BF4F74;
    background-color: white;
    width:100%;
`
const StyledTitle = styled.h1`
display: flex;
    justify-content: center;
    justify-items: center;
    align-content:center;
    align-items: center;
    color:#BF4F74;
`
const StyledLI = styled.li`
    display: flex;
    flex-flow:row;
    justify-content:center;
    justify-items: center;
    align-content:center;
    align-items: center;
    list-style-type: none;
    gap: 10px;
    background-color: #f7d9fb;
    color: #2a4be1;
    padding: 20px;
    width: 500px;
    font-weight: bold;
    border: 2px solid white;
`

function Homepage() {
  const [ username, setUsername] = useState('');
  const [ password, setPassword] = useState('');
  const [ id, setId] = useState('');
  const [ itemData, setItemData ] = useState([]);
  const [ userData, setUserData ] = useState([])


  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8081/users`)
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        setUserData(data)
        let username = data.map(data => data.username);
        // console.log('this is the username', username);
        // setUsername(username);
        // let passwords = data.map(data => data.password);
        // console.log('these are passwords', passwords)
        // setPassword(passwords);
      })
  }, []);

  function handleSubmit() {
    navigate('./user')

  }

  function createUser () {
    navigate('./login')

  }




    return (
      <>
          <div className="app">
            <header>All Items In Inventory</header>
            <h2>Welcome to our Item Inventory</h2>
             <div className="data-import-container">
             <div className="form">
             <form>
            <label for="username">
              <strong>USERNAME:</strong>
            </label>
            <br></br>
            <input type="text" id="username" name="username" />
            <br />
            <label for="password">
              <strong>PASSWORD: </strong>
            </label>
            <br></br>
            <input type="password" id="password" name="password" />
            <br />
            <input onClick={()=>{handleSubmit()}} className="submit" type="button" value="SUBMIT"/>
            <p></p>
            <input onClick={()=>{createUser()}} className="submit" type="button" value="Create Account"/>
          </form>
          </div>
         </div>
         </div>

      </>




    )







}


export default Homepage
