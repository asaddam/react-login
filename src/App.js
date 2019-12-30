import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SignIn from './Component/SignIn';

class App extends Component {

  render() {
    return (
      <div>
        <Route path='/' component={SignIn} />
      </div>
    )
  }

}

export default App;
