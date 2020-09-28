import React, { useState, useEffect } from 'react';
import { Router, Route, Switch } from "react-router-dom";

import styled from 'styled-components';


const ItemBox = (props) => {

  console.log(props.itemData.images[0])
  return (
    <ItemBoxStyled>
      <img src={props.itemData.images[0]} width="370"/>
    </ItemBoxStyled>
  )
}

export default ItemBox;

const ItemBoxStyled = styled.div`
  border: 5px;
  margin: 5px;
`
