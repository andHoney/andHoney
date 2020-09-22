import React, { useState, useEffect } from 'react';
import { Router, Route, Switch } from "react-router-dom";

import styled from 'styled-components';
import Categories from './subComponents/Categories.jsx';
import NewArrivals from './subComponents/NewArrivals.jsx';

const HomeContainer = styled.div`
`


const Home = (props) => {
  
  
  return (
    <HomeContainer>
      <Categories categories={props.categories}/>
      <NewArrivals/>
    </HomeContainer>
  )
}

export default Home; 


