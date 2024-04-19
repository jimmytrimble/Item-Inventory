import * as React from 'react';
import { useState, useEffect } from 'react';
import { css, styled } from 'styled-components';



function UserPage () {
  const [ itemData, setItemData ] = useState([]);
  const [ id, setId ] = useState('');
  const [ username, setUsername] = useState('');
  const [ password, setPassword] = useState('');




    const handleSubmit = (event) => {
      event.preventDefault(); // Prevent default form submission behavior

      let uname = event.target.username.value;
      let pword = event.target.password.value;

      setUsername(uname);
      setPassword(pword);
    };

    useEffect(() => {
      const match = itemData.find(user => username === user.username && password === user.password);
      if (match) {
        setId(match.id);
      } else {
        setId('');
      }
    }, [itemData, username, password]);

    useEffect(() => {
      fetch(`http://localhost:8081/users/item/${id}`)
        .then(response => response.json())
        .then(data => {
          setItemData(data)
          console.log("data", data)
        })

    }, [id])


  return (
    <>
      <div className='user-info'>
          <h2>Name: {itemData.name}</h2>
          <h2>Item: {itemData.name}</h2>
          <h2>Price:  ${itemData.price}</h2>
          <h2>Image: {itemData.image}</h2>
          <h2>Details: {itemData.details}</h2>
        </div>



    </>



  )



}

export default UserPage