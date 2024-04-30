import React from 'react';
import { Link } from 'react-router-dom';

const Soda = () => {
  return (
    <div>
      <h2>Soda</h2>
      <p>This is regular Soda, we don't offer Diet Soda.</p>
      <Link to="/">Go back to Vending Machine</Link>
    </div>
  );
}

export default Soda; 