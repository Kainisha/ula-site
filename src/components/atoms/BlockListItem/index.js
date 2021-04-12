import React from 'react'
import PropTypes from 'prop-types'
import ChevronRight from '@icons/ChevronRight'
import { BlockListItemStyled, BlockListItemIconStyled } from './style'

const BlockListItem = ({ label }) => (
  <BlockListItemStyled>
    <BlockListItemIconStyled>
      <ChevronRight />
    </BlockListItemIconStyled>
    <span>{label}</span>
  </BlockListItemStyled>
)

BlockListItem.propTypes = {
  label: PropTypes.string.isRequired,
}

export default BlockListItem
