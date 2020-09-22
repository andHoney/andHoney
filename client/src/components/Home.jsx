import React, { useState, useEffect } from 'react';
import { Router, Route, Switch } from "react-router-dom";

import styled from 'styled-components';
import Categories from './subComponents/Categories.jsx';
import NewArrivals from './subComponents/NewArrivals.jsx';

const HomeContainer = styled.div`
`

const CategoryContainer = styled.div`
  background-color: #f0f0f0;
  text-align: center;
  text: black;
  display: flex;
  flex-direction: column;
  height: 50%;
  width: 100%;
  min-height: 350px;
  min-width: 300px;
`

const NewArrivalContainer = styled.div`
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  text-align: center;
  text: black;
`

const Home = (props) => {


  return (
    <HomeContainer>
      <CategoryContainer>
        <Categories categories={props.categories}></Categories>
      </CategoryContainer>
      <NewArrivalContainer>
        <NewArrivals></NewArrivals>
      </ NewArrivalContainer>
    </HomeContainer>
  )
}

export default Home; 