import React from 'react';
import styled from 'styled-components';

const Container=styled.div`
    height: 1.2rem;
    background-color: #dadada;
    margin: .5rem .3rem;
    border-radius:5px;
    
`;
const FillStyle=styled.div<{percentage:number}>`
    height:100%;
    width:${({percentage})=>percentage}%;
    background-color:#FF4141;

    display:flex;
    align-items:center;

    border-radius:5px;
`;
const LabelStyle=styled.span`
    padding: 5px;
    color: white;
    font-size:.3rem;
    font-family:"Bold";
    
`

const Progerssbar:React.FC<{percentage:number}>=({percentage})=>{

  return (
    <Container>
        <FillStyle percentage={percentage}>
            <LabelStyle>{`${percentage}%`}</LabelStyle>
        </FillStyle>
        
    </Container>
  );
}

export default Progerssbar;