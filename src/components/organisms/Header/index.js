import React from 'react';
import { HeaderStyled } from './styles'
import HeaderLink from 'molecules/HeaderLink'

const Header = () => {
    return (
        <HeaderStyled>
            <HeaderLink text="Doświadczenie" />
        </HeaderStyled>
    )
};

export default Header;
