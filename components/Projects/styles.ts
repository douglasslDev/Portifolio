import styled from "styled-components";

export const Content = styled.section`
display: flex;
flex-direction: column;
width: 100% ;
justify-content: space-between;
background: linear-gradient(180deg, rgba(7,34,71,1) 2%, rgba(17,64,104,1) 25%, rgba(47,148,196,1) 66%);

`;
export const ProjectContainer = styled.section`
display: flex;
`;

export const  ProjectsSection = styled.div `
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
border: solid black 1px;
border-radius: 50px;
background: black;
flex-direction: column;
opacity: 0.8;
justify-content: center;
margin-bottom: 20px;

&:hover{
    opacity: 1;
    border: 1px white solid;
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
margin-bottom: 20px;
font-size:36;
color: white;
`;

