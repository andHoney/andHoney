import React, { useState, useEffect } from 'react';
import { Router, Route, Switch } from "react-router-dom";

import styled from 'styled-components';

import ItemBox from './mainComponents/ItemBox.jsx'


const Tops = () => {

  return (
    <TopsStyled>
      <ItemBox></ItemBox>
      <ItemBox></ItemBox>
      <ItemBox></ItemBox>
      <ItemBox></ItemBox>
      <ItemBox></ItemBox>
    </TopsStyled>
  )
}

export default Tops; 

const TopsStyled = styled.div`

`