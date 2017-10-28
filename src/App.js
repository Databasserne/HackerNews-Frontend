import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Posts, Header } from './components'

const Routing = () => {
  return (
    <Router>
      <Route path="/" component={Posts} />
    </Router>
  );
}

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Routing />
      </div>
    );
  }
}

export default App;
