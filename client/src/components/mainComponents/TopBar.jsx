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

      <MenuContainer>
        <MenuButton categories={props.categories}></MenuButton>
      </MenuContainer>
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

`

const TitleContainer = styled.div`
  position: absolute;
  left: 0px;
` 

const MenuContainer = styled.div`
  position: absolute;
  right: 0px;
`