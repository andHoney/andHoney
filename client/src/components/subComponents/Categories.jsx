import React, { useContext } from 'react';
import styled from 'styled-components';
import Category from './Category.jsx'

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import CatContext from '../../Context.jsx';


const Categories = (props) => {

  let categories = useContext(CatContext);
  const cats = categories.map((cat, i) => {
    return (
      <Link 
        to={{
          pathname: '/category',
          state: {categoryName: cat.name}
        }}>
        <Category key={i} name={cat.name} image={cat.img}></Category>
      </Link>
    )
  })
  
  return (
      <CategoriesContainer>
      <h1>{'c a t e g o r i e s'}</h1>
        <CategoryImgs>
          {cats}
        </CategoryImgs>
      </CategoriesContainer>
  )
}


export default Categories;

const CategoriesContainer = styled.div`
  color: black;
  display: flex;
  justify-content: center;
  background-color: #f0f0f0;
  text-align: center;
  text: black;
  flex-direction: column;
  height: 50%;
  width: 100%;
  min-height: 350px;
  min-width: 300px;
`

const CategoryImgs = styled.div`
  display: flex; 
  flex-direction: row; 
  justify-content: center;
`
