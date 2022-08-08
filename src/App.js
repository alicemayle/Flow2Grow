import React, { Component } from 'react';
import AppBarMenu from './components/AppBarMenu';
import Footer from './components/Footer';
import Home from './containers/Home';

class App extends Component {
  render() {
    return (
      <div className='init'>
        <AppBarMenu />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;