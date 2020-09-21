import React, { useState, useEffect } from 'react';
import { Router, Route, Switch } from "react-router-dom";

import styled from 'styled-components';

import ItemBox from './mainComponents/ItemBox.jsx'


const Pants = () => {
  // state for pants

  return (
    <PantsStyled>
      <ItemBox></ItemBox>
      <ItemBox></ItemBox>
      <ItemBox></ItemBox>
      <ItemBox></ItemBox>
    </PantsStyled>
  )
}

export default Pants; 

const PantsStyled = styled.div`

`