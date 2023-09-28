import styled from "styled-components";
import { Box } from "@mui/material";


export const Content = styled.section`
display: flex;
flex-direction: column;
width: 100% ;
justify-content: center;
align-items: center;
background: linear-gradient(180deg, rgba(7,34,71,1) 2%, rgba(17,64,104,1) 25%, rgba(47,148,196,1) 66%);
`;
export const ProjectContainer = styled.section`
display: flex;

`;

export const  ProjectsSection = styled(Box) `
display: flex;
justify-content: center;
padding: 0px 40px;
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
width: 100%;

`;

export const ProjectsContainerTitle = styled.h1`
margin-bottom: 30px;
font-size:30px;
color: white;
`;

export const TitleTecAndFrams = styled.h1`
color: white;
display:flex;
margin-top: 30px;
margin-bottom: 50px;
font-size: 30px;
`;

export const TechnologiesAnsFramsContainer = styled.div`
display: flex;
`;

export const TechnologiesAnsFramsSection = styled(Box)`
padding: 0 20px;
display: flex;
align-items: center;
justify-content: center;
`;