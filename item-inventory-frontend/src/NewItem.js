import * as React from 'react';
import { useState, useEffect, useNavigate } from 'react-router-dom';
import { css, styled } from 'styled-components';

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

function NewItem () {

  const navigate = useNavigate();




  const createItem = () => {
    let item_name = document.getElementById('item_name').value
    let price = document.getElementById('price').value
    let image = document.getElementById('image').value
    let details = document.getElementById('details').value





    const event = {
        item_name: item_name,
        price: price,
        image: image,
        details: details
      }


      fetch('http://localhost:8081/item/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event),
      })

      .then(response => {
        document.location.reload();
      })
    }

  function navigateHome () {
    navigate('/')
  }



  return (
    <>

           <NewGift id='add-event'>
                  <StyledTitle> Fill Out Below To Create Account </StyledTitle>
                  <InnerDiv>
                      <label htmlFor="item_name">Name of Item:</label>
                      <input type="text" id="item_name" /> <br />
                  </InnerDiv>
                  <InnerDiv>
                      <label htmlFor="price">Enter Price</label>
                      <input type="integer" id="price" name="price" /> <br />
                  </InnerDiv>
                  <InnerDiv>
                      <label htmlFor="image">Enter Image Link</label> <br />
                      <input type="text" id="image" name="image" />
                   </InnerDiv>
                   <InnerDiv>
                      <label htmlFor="details">Enter Details</label>
                      <input type="text" id="details" name="details" /> <br />
                  </InnerDiv>
                  <StyledButton type="submit" onClick={createItem}>Submit</StyledButton>
                  <StyledButton type="submit" onClick={navigateHome}>Home</StyledButton>

            </NewGift>






    </>

  )
  }


  export default NewItem