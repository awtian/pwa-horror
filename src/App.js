import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Fixed from "./components/FixedMenuLayout";

class App extends Component {
  render() {
    return (
      <div>
        <Fixed />
      </div>
    );
  }
}

export default App;
