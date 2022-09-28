import React, { useState } from 'react';
import { Translation, withTranslation } from 'react-i18next';
import { CSSTransition } from 'react-transition-group';
import AppBarMenu from './components/AppBarMenu';
import Footer from './components/Footer';
import Home from './containers/Home/Home';
import ContactUs from './containers/Contact/ContactUs';
import Personal from './containers/Services/Personal';
import Business from './containers/Services/Business';
import AboutUs from './containers/AboutUs/AboutUs';
import PrivacyPolicy from './containers/PrivacyPolicy/PrivacyPolicy';
import ScrollButton from './components/ScrollButton';
import './styles.css';

function App () {
  const [pageSelect, setpageSelect] = useState(0);

  const changePage = (page) => {
    setpageSelect(page);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      });
  }
    return (
      <div className='init'>
        <Translation>
          { t => <AppBarMenu changePage={ changePage } t={t}/> }
        </Translation>
        <CSSTransition key={0} timeout={500} unmountOnExit classNames="item" in={pageSelect === 0}>
          <Translation>
            { t => <Home changePage={ changePage } t={t}/> }
          </Translation>
        </CSSTransition>
        <CSSTransition key={1} timeout={500} unmountOnExit classNames="item" in={pageSelect === 1}>
          <Translation>
            { t => <AboutUs changePage={ changePage } t={t}/> }
          </Translation> 
          </CSSTransition>
        <CSSTransition key={2} timeout={500} unmountOnExit classNames="item" in={pageSelect === 2}>
          <Translation>
            { t => <Personal changePage={ changePage } t={t}/> }
          </Translation>
          </CSSTransition>
        <CSSTransition key={3} timeout={500} unmountOnExit classNames="item" in={pageSelect === 3}>
          <Translation>
            { t => <Business changePage={ changePage } t={t}/> }
          </Translation>
          </CSSTransition>
        <CSSTransition key={4} timeout={500} unmountOnExit classNames="item" in={pageSelect === 4}>
          <Translation>
            { t => <ContactUs margin={true} t={t}/> }
          </Translation>
          </CSSTransition>
        <CSSTransition key={5} timeout={800} unmountOnExit classNames="item" in={pageSelect === 5}>
          <Translation>
            { t => <PrivacyPolicy changePage={ changePage } t={t}/> }
          </Translation> 
        </CSSTransition>
        <Translation>
            { t => <Footer t={t} changePage={ changePage }/> }
        </Translation>
        <ScrollButton />
      </div>
    );
}

export default withTranslation()(App);