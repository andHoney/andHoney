import React, { useState, useEffect } from 'react';
import { Router, Route, Switch } from "react-router-dom";

import styled from 'styled-components';
import Categories from './subComponents/Categories.jsx';
import NewArrivals from './subComponents/NewArrivals.jsx';

const Home = (props) => {
  return (
    <HomeContainer>
      <Categories/>
      <NewArrivals/>
    </HomeContainer>
  )
}

export default Home; 

const HomeContainer = styled.div`
`
