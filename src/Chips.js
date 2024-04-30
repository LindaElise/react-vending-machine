import React from 'react';
import { Link } from 'react-router-dom';

const Chips = () => {
  return (
    <div>
      <h2>Chips</h2>
      <p>Potate chips can be eaten with anything and you can eat as many bags as you want</p>
      <Link to="/">Go back to Vending Machine</Link>
    </div>
  );
}

export default Chips;