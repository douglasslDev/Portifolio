import styled from "styled-components";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export const Content = styled.div`
  display: flex;
  padding: 20px;
  margin-bottom: 100px;
  border: none;
  box-shadow: 0 4px 8px rgba(0,0,0,0.4);
  margin-right: 30px;
`;

export const TitleContainer = styled.h1`
display:flex;
color: black;
`;

export const CardContainer = styled(CardContent)`
display: flex;
`;