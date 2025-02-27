import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Service from './components/Service';
import Payment from './components/Payment';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Service} />
        <Route path="/payment" component={Payment} />
      </Switch>
    </Router>
  );
}

export default App;