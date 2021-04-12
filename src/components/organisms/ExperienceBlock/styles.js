import styled from 'styled-components';

export const BlockWrapperStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const BlockStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    max-height: 80%;
    max-width: 90%;
    border-radius: 1rem;
    padding: 3rem 0;
    background-color: white;
    padding: 1rem;
    box-shadow: 3px 6px 8px 0px ${({ theme }) => theme.shadow};
`;

export const BlockTitleStyled = styled.div`
    display: Plex;
    align-items: center;
    justify-content: center;
    align-self: stretch;
    align-items: flex-start;
    width: 100%;
    height: 100%;
`;

export const BlockItemsStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: stretch;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    position: relative;
`;
