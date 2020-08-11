import React from 'react';
import styled from 'styled-components';
import MenuButton from './MenuButton.jsx'


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

const TopBar = (props) => {
  
  return (
    <TopBarStyled>
      <TitleContainer>
        <h1>{'&  h o n e y'}</h1>
      </TitleContainer>
      <MenuContainer>
        <MenuButton categories={props.categories}></MenuButton>
      </MenuContainer>
    </TopBarStyled>
  )
}

export default TopBar;