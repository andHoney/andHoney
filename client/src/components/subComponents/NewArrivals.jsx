import React from 'react';


const NewArrivals = (props) => {
  return (
    <NewArrivalContainer>
      <h1>{'n e w'}</h1>
    </NewArrivalContainer>
  )
}

const NewArrivalContainer = styled.div`
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  text-align: center;
  text: black;
`

export default NewArrivals;