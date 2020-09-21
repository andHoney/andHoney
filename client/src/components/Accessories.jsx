import React, { useState, useEffect } from 'react';
import { Router, Route, Switch } from "react-router-dom";

import styled from 'styled-components';

import ItemBox from './mainComponents/ItemBox.jsx'


const Accessories = () => {

  return (
    <AccessoriesStyled>
      <ItemBox></ItemBox>
      <ItemBox></ItemBox>
      <ItemBox></ItemBox>
      <ItemBox></ItemBox>
    </AccessoriesStyled>
  )
}

export default Accessories; 

const AccessoriesStyled = styled.div`

`