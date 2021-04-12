import styled from 'styled-components';
import { Link } from 'gatsby';

export const HeaderLinkStyled = styled(Link)`
  height: 100%;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  cursor: pointer;
  transition: color 300ms ease-in-out, background-color 300ms ease-in-out;
  color: ${({ theme }) => theme.fifth};
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.main};
    color: white;
  }
`;
