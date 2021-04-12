import React from 'react'
import PropTypes from 'prop-types'
import { HeaderLinkStyled } from './style'

const HeaderLink = ({ text, to }) => (
    <HeaderLinkStyled to={to}>
        <span>
            { text }
        </span>
    </HeaderLinkStyled>
)

HeaderLink.propTypes = {
    text: PropTypes.string,
    to: PropTypes.string.isRequired
}

HeaderLink.defaultProps = {
    text: ''
}

export default HeaderLink;
