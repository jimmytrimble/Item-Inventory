import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { css, styled } from 'styled-components';

const StyledImage = styled.img`
  width: 200px;
  height: 200px;
`

const StyledButton = styled.button`
  display: flex;
    justify-content:center;
    justify-items:center;
    align-items:center;
    align-content:center;
    color: white;
    border-radius: 3px;
    border: 2px solid #BF4F74;
    background-color: #BF4F74;
    margin: 0.5em 1em;
    padding: 0.25em 1em;
    width: 100px;
    height: 35px;
    left-margin: 30px;
`

function DisplayItems () {

  const navigate = useNavigate();

  const [ itemData, setItemData ] = useState([]);


  useEffect(() => {
    fetch('http://localhost:8081/items')
      .then(response => response.json())
      .then(data => {
        console.log('itemData', data)
        setItemData(data)
        console.log('savedData', data)
      })
  }, [])


  // function addItem() {
  //   navigate('/add/item')











  return (

    <>
    <h1>All Data in Inventory</h1>
    {itemData.map((item) => (
      <>
        <h4>{item.item_name}</h4>
        <h4>{item.price}</h4>
        <h4><StyledImage src={item.image} alt="image"></StyledImage></h4>
        <h4>{item.details}</h4>
      </>
    ))}


      <StyledButton id="social-search-button">Add New Item</StyledButton>

  </>


  )
}


export default DisplayItems