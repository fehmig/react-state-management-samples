import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../redux/actions';

const ItemList = ({ items, removeItem }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        {item.name} <button onClick={() => removeItem(item.id)}>Remove</button>
      </li>
    ))}
  </ul>
);

const mapStateToProps = state => ({ items: state.items });

export default connect(mapStateToProps, { removeItem })(ItemList);
