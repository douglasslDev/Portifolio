import styled from "styled-components";
import Image from "next/image";
import { Box,Typography } from "@mui/material";


export const Content = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
 
`;

export const TopInfo = styled.div`
  color: white;
  display: flex;
  margin-bottom: 5px;
  justify-content: space-between;
`;

export const RoleInfo = styled.strong``;


export const MockUpContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5px;

`;

export const MockUp = styled(Image)`
  display: flex;
  
  object-fit: fill;
  @media (min-width: 990px) {

  justify-content: center;

  }
`;

export const ProjectFooter = styled.div`
  display: flex;
  flex-direction: column;

  > div:first-child {
    margin-bottom: 15px;
  }
  @media (min-width: 990px) {
    display: flex;
    flex-direction: column;
    align-items: center;
   
    > div:first-child {
      margin-bottom: 0;
    }
  }
`;

export const Presentation = styled.div`
display: flex;
flex-direction:column;
  color: white;
  text-align: center;
  > span {
    font-size: 20px;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 50px;
  margin-bottom: 15px;
  @media (min-width: 990px) {
    align-items: center;
  }
`;

export const Icon = styled.a`
  color: white;
  opacity: 0.5;
  transition: 0.3s;

  &:not(:last-child) {
    margin-right: 25px;
  }

  &:hover {
    font-size: 50px;
    opacity: 1;
  }
`;

export const ModalContainer = styled(Box)`

  display:flex;


`;



export const LineHorizontal=styled.div`
width: 90%;
border: 1px white outset;
opacity: 0.5;
`;