import React, { Component } from 'react';
import AppBarMenu from './components/AppBarMenu';
import Footer from './components/Footer';
import Home from './containers/Home/Home';
import ContactUs from './containers/Contact/ContactUs';
import Personal from './containers/Services/Personal';
import Business from './containers/Services/Business';
import AboutUs from './containers/AboutUs/AboutUs';

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
        { pageSelect === 0 && <Home { ...this.props } changePage={ this.changePage }/> }
        { pageSelect === 1 && <AboutUs { ...this.props } changePage={ this.changePage }/> }
        { pageSelect === 2 && <Personal { ...this.props } changePage={ this.changePage }/> }
        { pageSelect === 3 && <Business { ...this.props } changePage={ this.changePage }/> }
        { pageSelect === 4 && <ContactUs { ...this.props }/> }
        <Footer />
      </div>
    );
  }
}

export default App;