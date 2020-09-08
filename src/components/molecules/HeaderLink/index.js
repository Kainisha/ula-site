import React from 'react'
import { HeaderLinkStyled } from './style'

const HeaderLink = ({ text }) => (
    <HeaderLinkStyled>
        <span>
            { text }
        </span>
    </HeaderLinkStyled>
)

export default HeaderLink;
