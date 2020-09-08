import styled from 'styled-components'
import { Link } from 'gatsby'

export const HeaderLinkStyled = styled(Link)`
    height: 100%;
    text-transform: uppercase;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10rem;
    transition: background 300ms ease-in-out;
    cursor: pointer;
    transition: color 300ms ease-in-out, background-color 300ms ease-in-out;

    &:hover {
        background-color: ${({ theme }) => theme.main};
        color: white;
    }
`
