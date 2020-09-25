import React from 'react';
import styled from 'styled-components';

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import MenuButton from './MenuButton.jsx'


const TopBar = (props) => {
  
  return (
    <TopBarStyled>
      <TitleContainer>
        <StyledLink to='/'>
          <h1>{'&  h o n e y'}</h1>
        </StyledLink>
      </TitleContainer>
      <MenuButton ></MenuButton>
    </TopBarStyled>
  )
}

export default TopBar;

const StyledLink = styled(Link)`
    text-decoration: none;
    
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: white;
    }
`

const TopBarStyled = styled.div`
  color: white;
  display: flex;
  position: relative;
  background-color: #c9c1b9;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 50px;
  min-width: 300px;
  padding: 25px;

`

const TitleContainer = styled.div`
  position: absolute;
  left: 30px;
` 
