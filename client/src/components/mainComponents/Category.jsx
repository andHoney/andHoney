import React from 'react';
import styled from 'styled-components';


const CategoryStyle = styled.div`
  max-width: 375px;
  margin: 2.5px
`

const Category = (props) => {

  return (
    <CategoryStyle>
      <img src={props.image} alt="" width="370"/>
    </CategoryStyle>
  )
}
export default Category;