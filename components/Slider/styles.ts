import styled from "styled-components";
import CardContent from '@mui/material/CardContent';

export const Content = styled.div`
display: flex;
  position: relative;
  perspective: 1000px;
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
width: 60%;
align-items: center;
justify-content: center;
  height: 300px;
  transition: transform 500ms ease 0s, opacity 500ms ease 0s,
visibility 500ms ease 0s;
  position: absolute;
  top: 0;
  border-radius: 12px;
  justify-content: center;
  align-items: center;

`;

export const CarouselContainerSection =styled.div`
display:flex;
flex-direction: column;
text-align: center;
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

