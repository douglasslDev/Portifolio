import styled from "styled-components";

export const Content = styled.div`
  background: #0194be;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding:20px;
`;

export const TopInfo = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
`;

export const RoleInfo = styled.strong``;


export const MockUpContainer = styled.div`
  max-width: 100%;
  max-height: 70%;
  display: flex;
  justify-content: center;
`;

export const MockUp = styled.img`
  justify-content: center;
  max-width: ${({type}: {type: string}) =>
    type === "desktop" ? "60%" : " 40%"};
  object-fit: contain;
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
    justify-content: space-between;
    > div:first-child {
      margin-bottom: 0;
    }
  }
`;

export const Presentation = styled.div`
  color: white;
  text-align: center;
  > span {
    display: block;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 50px;
  @media (min-width: 990px) {
    align-items: center;
    justify-content: unset;
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
