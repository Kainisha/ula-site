import styled from 'styled-components';

export const HeaderStyled = styled.header`
    position: fixed;
    background-color: white;
    top: 0;
    height: 2.5rem;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    box-shadow: 1px 2px 6px ${({ theme }) => theme.shadow};
    z-index: 200;
`;
