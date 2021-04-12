import styled from 'styled-components'

export const BlockListItemStyled = styled.li`
  font-weight: 400;
  font-size: 0.7rem;
  line-height: 1.3;
  color: ${({ theme }) => theme.sixth};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`;

export const BlockListItemIconStyled = styled.div`
  align-self: stretch;
  padding-top: 0.05rem;

  svg {
    width: 0.5rem;
    height: 0.5rem;
  }
`;
