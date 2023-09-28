import styled from "styled-components";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export const Content = styled(Card)`
  display: flex;

  padding: 20px;
  margin-bottom: 100px;
  border: none;
  box-shadow: 0 4px 8px rgba(0,0,0,0.4);
  color: white;
  background:transparent;
  margin-right: 30px;
`;

export const TitleContainer = styled.h1`
color: white;
display:flex;
`;

export const CardContainer = styled(CardContent)`

`;