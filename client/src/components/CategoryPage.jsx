import React, { useState, useEffect } from 'react';
import { Router, Route, Switch } from "react-router-dom";

import styled from 'styled-components';

import ItemBox from './subComponents/ItemBox.jsx'


const CategoryPage = (props) => {
  // state for category page needs to request item data for items with 'props.location.state.categoryName' category

  return (
    <CategoryStyled>
      <h1>{props.location.state.categoryName}</h1>
      <ItemBox></ItemBox>
      <ItemBox></ItemBox>
      <ItemBox></ItemBox>
      <ItemBox></ItemBox>
    </CategoryStyled>
  )
}

export default CategoryPage; 

const CategoryStyled = styled.div`
  text-align: center;
  justify-content: center;

`