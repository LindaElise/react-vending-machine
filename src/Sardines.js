import React from 'react';
import { Link } from 'react-router-dom';

const Sardines = () => {
  return (
    <div>
      <h2>Sardines</h2>
      <p>You don't eat the sardines. The sardines, they eat you!</p>
      <Link to="/">Go back to Vending Machine</Link>
    </div>
  );
}

export default Sardines;