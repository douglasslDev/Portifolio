import styled from "styled-components";
import Image from "next/image";
import { Button } from "primereact/button";

export const Content = styled.section`
display: flex;
  flex-direction: column;
  width: 100%;
padding: 25%  15% 15% 15%;
  @media (min-width: 990px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  padding-top:10%;

  }
`;

export const AboutMeContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

@media (min-width: 990px) {
display: flex;
flex-direction: row;

align-items:center;
justify-content: top;
}
`;

export const DataAboutMe = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media (min-width: 990px) {
display: flex;
justify-content: center ;
align-items: baseline;

}
`;



export const TitleName = styled.h1`
display: flex;
color: white;
  font-size: 40px;
  font-family: 'serif';
  
`;

export const ImagePersonal = styled(Image)`
display: flex;
border-radius: 200px;
width: 200px;
height: 200%;
@media (min-width: 990px) {


}
`;



export const LineHorizontal=styled.div`
width: 90%;
border: 1px white outset;
opacity: 0.5;

`;


export const Description = styled.p`
display: flex;
justify-content: end;
color: white;
font-size: 34px;
  margin-top: 8%;
  text-align: center;
  @media (min-width: 990px) {
display: flex;
text-align: start;
max-width:70%;
text-align: justify;
font-size: 24px;
}
`;

export const IconsContainer = styled.div`
  margin-top: 5%;
  display: flex;
  align-items: center;
  height: 50px;
`;

export const Icon = styled.a`
display: flex;
  color: #56baec;
  opacity: 0.5;
  text-decoration: none ;
  transition: 0.3s;
  &:not(:last-child) {
    margin-right: 25px;
  }

  &:hover {
    font-size: 50px;
    opacity: 1;
  }
`;



export const ContactMe = styled(Button)`
width: 150px;
margin-top: 20px;


@media (min-width: 990px) {
display: flex;
margin-top: 60px;

}
`;






