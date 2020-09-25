import React from 'react';
import styled from 'styled-components';




const Category = (props) => {
  return (
    <CategoryStyle>
      <ImgContainer>
        <img src={props.image} alt="" width="370"/>
      </ImgContainer>
      <Title>{props.name}</Title>
    </CategoryStyle>
  )
}
export default Category;

const Title = styled.div`
  visibility: hidden;
  color: black;
  font-size: 30px;
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const ImgContainer = styled.div`
`

const CategoryStyle = styled.div`
  max-width: 375px;
  margin: 2.5px;
  position: relative;
  z-index: 0;

  :hover ${Title} {
    opacity: 1;
    visibility: visible;
  }

  :hover ${ImgContainer} {
    opacity: .33;
  }
  
  :hover {
    cursor: pointer;
  }
`