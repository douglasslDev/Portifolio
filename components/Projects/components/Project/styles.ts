import styled from "styled-components";
import Image from "next/image";
export const Content = styled.div`
  background: #0194be;
  display: flex;
  flex-direction: column;
  align-items: center;
 margin-right: 20px;
 border: 1px solid  #0194be;
 border-radius: 30px;
 padding: 20px;
  &:hover{
    opacity: 1;
    border:white solid 1px;
 /*    transform: scale(2); 
  transition: transform 0.3s ease;  */
  }
`;

export const TopInfo = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
`;

export const RoleInfo = styled.strong``;


export const MockUpContainer = styled.div`
  display: flex;
  justify-content: center;

`;

export const MockUp = styled(Image)`
  justify-content: center;
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
