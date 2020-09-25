import React, { useState, useEffect } from 'react';
import { Router, Route, Switch } from "react-router-dom";

import styled from 'styled-components';


const ItemBox = (props) => {
  return (
    <ItemBoxStyled>
      <div>item</div>
    </ItemBoxStyled>
  )
}

export default ItemBox;

const ItemBoxStyled = styled.div`
  width: 350px;
  border: 5px;
`
