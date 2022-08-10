import React, { Component } from 'react';
import AppBarMenu from './components/AppBarMenu';
import Footer from './components/Footer';
import Home from './containers/Home';

class App extends Component {
  state = {
    pageSelect: 0
  }
  changePage = (page) => {
    this.setState({ pageSelect: page });
  }
  render() {
    const {pageSelect} = this.state;

    return (
      <div className='init'>
        <AppBarMenu { ...this.props } changePage={ this.changePage }/>
        { pageSelect === 0 && <Home />}
        <Footer />
      </div>
    );
  }
}

export default App;