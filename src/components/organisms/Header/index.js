import React from 'react';
import HeaderLink from '@atoms/HeaderLink'
import { HeaderStyled } from './styles'

const Header = () => (
  <HeaderStyled>
    <HeaderLink text="Doświadczenie" to="experience"/>
  </HeaderStyled>
);

export default Header;
