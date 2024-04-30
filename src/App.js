import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Chips from './Chips';
import Sardines from './Sardines';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={VendingMachine} />
          <Route path="/Soda" component={Soda} />
          <Route path="/Chips" component={Chips} />
          <Route path="/Sardines" component={Sardines} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
