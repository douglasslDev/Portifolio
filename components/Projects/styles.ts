import styled from "styled-components";
import { Box } from "@mui/material";


export const Content = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
`;

export const ProjectContainer = styled.section`
display: flex;

`;

export const  ProjectsSection = styled(Box) `
display: flex;
justify-content: center;
margin-bottom: 20px;
flex-direction: column;



@media (min-width: 990px) {
flex-direction: row;
}
`;  

export const ProjectsContainer = styled.div`
display: flex;
border: solid transparent 1px;
border-radius: 50px;
background: transparent;
flex-direction: column;
opacity: 0.8;
justify-content: center;
box-shadow: 0 4px 8px rgba(0,0,0,0.4);
margin-bottom: 20px;


&:hover{
    opacity: 1;
    border: 1px transparent solid;
}

@media (min-width: 990px) {
    margin-right: 20px;

}

`;
export const  ProjectsContainerSection = styled.div `
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
width: 100vh;

`;

export const ProjectsContainerTitle = styled.h1`
margin-bottom: 30px;
font-size:40px;
color: white;
@media (min-width: 990px) {

}
`;

export const TitleTecAndFrams = styled.h1`
color: white;
display:flex;
margin-top: 30px;
margin-bottom: 50px;
font-size: 40px;
text-align:center;
@media (min-width: 990px) {

}
`;

export const TechnologiesAnsFramsContainer = styled.div`
display: flex;
background: none;
`;

export const TechnologiesAnsFramsSection = styled(Box)`
display: flex;
background: none;
align-items: center;
justify-content: center;
`;

export const LineHorizontal=styled.div`
width: 70%;
border: 1px white outset;
opacity: 0.5;
margin-bottom: 30px;
`;