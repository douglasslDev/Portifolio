import styled from "styled-components";
import CardContent from '@mui/material/CardContent';


export const CarouselContainerSection =styled.div`
display:flex;
flex-direction: column;
text-align: center;
justify-content: center;
align-items: center;
width: 80%;
`;
export const Content = styled.div`
display: flex;
  position: absolute;
  perspective: 400px;
  transform-style: preserve-3d;
    width: 362px;
  height: 300px; 
  margin: 0 auto;
  justify-content: center;
  align-items: center;
text-align: center;

  @media (min-width: 990px) {
    perspective: 1000px;
    
  }
`;

export const TitleContainer = styled.h1`
display:flex;
color: white;
text-align: center;
align-items: center;
justify-content: center;
font-size: 24px;
`;
export const DescriptionContainer = styled.h3`
display:flex;
color: white;
font-weight: 300;
text-align: center;
font-size: 10px;
align-items: center;
justify-content: center;
`;


export const CardContainer = styled(CardContent)`
display: flex;
width: 80%;
height: 300px;
flex-direction: column;
align-items: center;
justify-content: center;
  transition: transform 500ms ease 0s, opacity 500ms ease 0s,
visibility 500ms ease 0s;
  position: absolute;
  top: 0;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  @media (min-width: 990px) {
    width: 60%;  
    height: 300px;


  } 

`;


export const CardReflection =styled.div`
  position: absolute;
  width: 50%;
  height: 300px;
  bottom: -60px;
  border-radius: 12px;
  transition: transform 500ms ease 0s, opacity 500ms ease 0s,
  visibility 500ms ease 0s;
    `;

export const Buttons =styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  
`;

