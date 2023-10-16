import styled from "styled-components";
import Image from "next/image";
import { Box,Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Content = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  margin: 20px 0;
 
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
  margin-top: 15px;
  margin-bottom: 15px;
  @media (min-width: 990px) {
    align-items: center;
  }
`;

export const Icon = styled.a`
  color: white;
  opacity: 0.5;
  transition: 0.3s;
  text-decoration: none;

  &:not(:last-child) {
    margin-right: 25px;
  }

  &:hover {
    font-size: 50px;
    opacity: 1;
  }
`;

export const ModalContainer = styled(Box)`
border-radius: 20px;
  display:flex;
opacity: 0.9;

`;



export const LineHorizontal=styled.div`
width: 90%;
border: 1px white outset;
opacity: 0.5;
`;


export const ModalContainerTitle = styled(Typography)`
color: black;
margin-top: 20px;
`;

export const ModalContainerDescription = styled(Typography)`
color: black;
font-size: 14px;
font-weight: 500;
text-align: justify;
`;
export const MontalContent = styled.div`
display: flex;
flex:1;
flex-direction: column;
padding: 10px;
`;

export const ModalCard = styled.div`

border: 1px solid #d3d3d3;
padding: 20px;
border-radius: 10px;
margin-top: 20px;
`;
export const iconSkills = styled(FontAwesomeIcon)`
margin-right: 5px;
`;

