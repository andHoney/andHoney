import React from 'react';
import styled from 'styled-components';
import Category from './Category.jsx'

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const Categories = (props) => {
  
  const cats = props.categories.map((cat, i) => {
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
    <div>
      <h1>{'c a t e g o r i e s'}</h1>
      <CategoriesContainer>
        {cats}
      </CategoriesContainer>
    </div>
  )
}


export default Categories;

const CategoriesContainer = styled.div`
  color: black;
  display: flex;
  justify-content: center;
`