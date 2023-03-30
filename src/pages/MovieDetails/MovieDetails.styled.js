import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Poster = styled.img`
  margin-right: 20px;
  width: 300px;
  height: 450px;
`;

export const Text = styled.p`
  font-size: 16px;
`;

export const Title = styled.h1`
  font-size: 32px;
`;

export const SubTitle = styled.h2`
  font-size: 24px;
`;

export const NavigationLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 24px;

  li & {
    color: blue;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    text-decoration: underline;
  }
`;

export const AdditionalInfo = styled.div`
margin-top: 10px;
border-top: 1px solid black;
border-bottom: 1px solid black;
`