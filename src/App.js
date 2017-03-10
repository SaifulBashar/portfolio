import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Map from './Map';
import Footer from './Footer';
import Work from './Work';

class App extends Component {
  render() {
    return (
        <div>
          <Header/>
          <Work/>
          <Map/>
          <Footer/>
        </div>
    );
  }
}

export default App;
