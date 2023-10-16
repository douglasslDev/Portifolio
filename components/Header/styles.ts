import styled from "styled-components";
import Link from "next/link";


export const Content = styled.section`
  display: flex;
padding: 20p  x;
  align-items: center;
justify-content: space-between;
width: 85%;
height: 60px;
border-radius: 120px;
background: black;
opacity: 0.8;
position: fixed;
top: 5vh;
&:hover{
  opacity: 1;
}


@media (min-width: 700px) {
  padding:  0 30px;
  width: 75%;
}

@media (min-width: 900px) {
  width: 65%;
  padding:  0 30px;

}

@media (min-width: 1200px) {
  height: 70px;
  width: 45%;
  padding:  0 15px;


}
`;
export const HeaderContainer = styled.footer`

`;


export const NavList = styled.ul`
  display: flex;
padding: 0 20px;
width: 80%;

`;

export const NavItem = styled.li`
  display: flex;
  text-decoration: none;
  margin-right:20px;
  &:hover{
  border-bottom: 1px solid white;
  opacity: 0.9;
}

`;

export const Links = styled(Link)`
font-size: 16px;
font-weight: 400;
color: white;
text-decoration: none;

@media (min-width: 1300px) {
  font-size: 14px;
  }

`;

export const TranslateContainer = styled.div`
display: flex;
transition: 0.3s;


  > span {
    font-size: 18px;
    padding: 0 10px;
    color: white;
  }

  > span:nth-child(2) {
    color: darkgray;
  }

  > span:first-child,
  span:last-child {
    cursor: pointer;
    font-size: 18px;
  }

  > span:first-child:hover,
  span:last-child:hover {
    opacity: 0.5;
  }
`;