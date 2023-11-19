import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../redux/actions';

const ItemForm = ({ addItem }) => {
  const [itemName, setItemName] = useState('');

  const handleAddItem = () => {
    if (itemName.trim() !== '') {
      addItem({ id: Date.now(), name: itemName });
      setItemName('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={itemName}
        onChange={e => setItemName(e.target.value)}
      />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

export default connect(null, { addItem })(ItemForm);
