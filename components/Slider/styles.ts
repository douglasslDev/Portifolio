import styled from "styled-components";
import CardContent from '@mui/material/CardContent';

export const Content = styled.div`
display: flex;
  position: relative;
  perspective: 500px;
  transform-style: preserve-3d;
    width: 362px;
  height: 272px; 
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
color: black;
`;

export const CardContainer = styled(CardContent)`
display: flex;
width: 50%;
  height: 272px;
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
  height: 60px;
  bottom: -60px;
  border-radius: 12px;
  transition: transform 500ms ease 0s, opacity 500ms ease 0s,
  visibility 500ms ease 0s;
    `;

export const Buttons =styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  
`;

