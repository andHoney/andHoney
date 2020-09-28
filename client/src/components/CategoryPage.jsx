import React, { useState, useEffect } from 'react';
import { db } from '../../../firebaseconfig.js'

import styled from 'styled-components';

import ItemBox from './subComponents/ItemBox.jsx'


const CategoryPage = (props) => {
  const [ catItems, setCatItems ] = useState([]);
  // const [ catName, setCatName ] = useState('');
  
  useEffect(() => {
    const catName = props.location.state.categoryName;
    db.collection('items').where('cat', '==', catName).get()
      .then(itemData => {
        const itemList = itemData.docs.map(item => ({
          id: item.id,
          ...item.data()
        }));
        setCatItems(itemList)
      })
      .catch(() => console.log('items not found'))
    }, [])
  
  const items = catItems.map((item, i) => {
    return (
      <ItemBox itemData={item} key={i}/>
    )
  })

  return (
    <CategoryStyled>
      <h1>{props.location.state.categoryName}</h1>
      <ItemsContainer>
        {items}
      </ItemsContainer>
    </CategoryStyled>
  )
}

export default CategoryPage; 

const CategoryStyled = styled.div`
  margin: 10px;
  text-align: center;
  justify-content: center;
  color: black;
  display: flex;
  background-color: #f0f0f0;
  flex-direction: column;
  
`

const ItemsContainer = styled.div`
  display: flex; 
  flex-direction: row; 
  justify-content: center;
  height: 50%;
  width: 100%;
  overflow-x: scroll;
`
