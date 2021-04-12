import React from 'react';
import PropTypes from 'prop-types';
import BlockListItem from '@atoms/BlockListItem';
import { ListStyled } from './styles';

const List = ({ items }) => (
  <ListStyled>
    { items.map(({ label }) => (
      <BlockListItem key={label} label={label} />
    )) }
  </ListStyled>
);

List.propTypes = {
  items: PropTypes.array.isRequired,
};

export default List;
