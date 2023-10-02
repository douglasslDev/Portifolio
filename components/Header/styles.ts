import styled from "styled-components";
import Link from "next/link";


export const Content = styled.footer`
  display: flex;
padding:  0 30px;
  align-items: center;
  justify-content: space-between;
width: 90%;
height: 100px;
border-radius: 120px;
background: black;
opacity: 0.8;
position: fixed;
top: 5vh;
&:hover{
  opacity: 1;
}

@media (min-width: 990px) {
  height: 70px;
  width: 50%;

}
`;
export const HeaderContainer = styled.footer`

`;


export const NavList = styled.ul`
  display: flex;
padding: 0 20px;
width: 80%;
justify-content: space-between;
@media (min-width: 990px) {
  width: 70%;
}
`;

export const NavItem = styled.li`
  display: flex;
  text-decoration: none;

  margin-right:20px;


`;

export const Links = styled(Link)`
font-size: 14px;
font-weight: 400;
color: white;
text-decoration: none;

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