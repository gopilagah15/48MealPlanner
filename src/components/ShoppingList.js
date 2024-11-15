import React from 'react';

const ShoppingList = ({ shoppingList }) => (
  <div className="shopping-list">
    <h2>Shopping List</h2>
    <ul>
      {shoppingList.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default ShoppingList;
