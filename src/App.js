import React, { Component } from 'react';
import { Button, Alert } from 'reactstrap';
import Header from './Includes/Header';
import Login from './Components/Login';
import AppRouter from './Components/AppRouter';

class App extends Component {

  render() {
    return (
      <div>
        <Header />

        <div className="container">



          <Login/>

        </div>
      </div>
    );
  }
}

export default App;
