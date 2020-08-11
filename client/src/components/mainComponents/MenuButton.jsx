import React, { useState } from 'react';
import styled from 'styled-components';
import MenuContent from './MenuContent.jsx';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

// import Modal from 'react-modal';





const MenuButton = (props) => {
  
  const [show, setShow] = useState(false);
  
  const openMenu = (event) => {
    setShow(true);
  }
  
  const closeMenu = (event) => {
    setShow(false);
  }
  
  const cats = props.categories.map((cat, i) => {
    return (
      <li key={i}>
        <Link onClick={closeMenu} to={`/${cat.name}`}>{cat.name}</Link>
      </li>
      )
    })
    
    
    return (
      <MenuStyleContainer>
      <Button onClick={openMenu}>{'m e n u'}</Button>
      
      { show && (
        <MenuModal onClick={closeMenu} >
            <MenuText categories={props.categories}>{
              //titles
            }
              <nav>
                <ul>
                  <li>
                    <Link onClick={closeMenu} to="/">Home</Link>
                  </li>
                  {cats}
                  {/* <li>
                    <Link onClick={closeMenu} to="/pants">Pants</Link>
                  </li>
                  <li>
                    <Link onClick={closeMenu} to="/tops">Tops</Link>
                  </li> */}
                </ul>
              </nav>
            </MenuText>
          </MenuModal>
        )}

    </MenuStyleContainer>
  )
}

export default MenuButton;

const MenuStyleContainer = styled.div`
  color: black;
`

const Button = styled.button`
  height: 50px;
  :hover {
    cursor: pointer;
  }
`

const MenuModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
  color: black;
  opacity: .88;
`

const MenuText = styled.div`
  color: black;
  font-size: 30px;
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
`