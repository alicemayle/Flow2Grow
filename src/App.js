import React, { Component } from 'react';
import { Translation, withTranslation } from 'react-i18next';
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
        <Translation>
          { t => <AppBarMenu { ...this.props } changePage={ this.changePage } t={t}/> }
        </Translation>
        { pageSelect === 0 && 
          <Translation>
            { t => <Home { ...this.props } changePage={ this.changePage } t={t}/> }
          </Translation>
        }
        { pageSelect === 1 && 
          <Translation>
            { t => <AboutUs { ...this.props } changePage={ this.changePage } t={t}/> }
          </Translation> 
        }
        { pageSelect === 2 && 
          <Translation>
            { t => <Personal { ...this.props } changePage={ this.changePage } t={t}/> }
          </Translation>
        }
        { pageSelect === 3 && 
          <Translation>
            { t => <Business { ...this.props } changePage={ this.changePage } t={t}/> }
          </Translation>
        }
        { pageSelect === 4 && 
          <Translation>
            { t => <ContactUs { ...this.props } t={t}/> }
          </Translation>
          
        }
        <Footer />
      </div>
    );
  }
}

export default withTranslation()(App);