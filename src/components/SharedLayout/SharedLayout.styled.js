import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
font-size: 32px;
text-decoration: none;
color: black;

&.active {
    color: orangered;
}

&:first-child {
    margin-right: 10px;
    margin-left: 10px;
}
`

export const StyledHeader = styled.header`
  height: 50px;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
`;

export const StyledMain = styled.main`
padding-left: 20px;
padding-right: 20px;
padding-bottom: 20px;
`