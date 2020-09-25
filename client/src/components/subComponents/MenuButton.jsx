import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import CatContext from '../../Context.jsx';

const MenuButton = (props) => {
  const [show, setShow] = useState(false);
  
  const openMenu = (event) => {
    setShow(true);
  }
  
  const closeMenu = (event) => {
    setShow(false);
  }
  
  let categories = useContext(CatContext)

  const cats = categories.map((cat, i) => {
    return (
      <div>
        <StyledLink key={i} onClick={closeMenu} to={{
          pathname: '/category',
          state: {categoryName: cat.name}
        }}>{cat.name}</StyledLink>
      </div>
    )
  })
    
  return (
    <MenuStyleContainer>
      <Button onClick={openMenu}>{'m e n u'}</Button>
    {show && (
      <MenuModal onClick={closeMenu} >
        <MenuText >
          <nav>
            <StyledLink onClick={closeMenu} to="/">home</StyledLink>
            {cats}
          </nav>
        </MenuText>
      </MenuModal>
    )}
    </MenuStyleContainer>
  )
}

export default MenuButton;

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: black;
    }
`

const MenuStyleContainer = styled.div`
  color: black;
  position: absolute;
  right: 30px;
`

const Button = styled.button`
  height: 50px;
  :hover {
    cursor: pointer;
  }
`

const MenuModal = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2000;
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
  opacity: .88;
`

const MenuText = styled.div`
  display: flex;
  color: black;
  font-size: 30px;
  justify-content: center;
  align-items: center;
  text-align: center;
`