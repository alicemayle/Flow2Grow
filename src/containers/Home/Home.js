import React from 'react';
import { Parallax, ParallaxProvider  } from 'react-scroll-parallax';
import BoxAboutUs from './BoxAboutAs';
import BoxServices from './BoxServices';
import ContactUs from '../Contact/ContactUs';
import '../../styles.css';
import logo from '../../images/Logo Blanco F2G.png';

function Home ({changePage, t }) {
    return (
        <ParallaxProvider scrollAxis='vertical'>
            <div className='home-page'>
                <div className='home-page-title'>
                      <Parallax speed={-200} className='parallax'>
                          <div className='ratio'>
                              <div className='inner'>
                                  <Parallax speed={15} className="box">
                                  <img src={logo} alt="LogoHome" className='home-page-title-logo'/>
                                  </Parallax>
                              </div>
                          </div>
                      </Parallax>
                    </div>
                <BoxAboutUs changePage={changePage} t={t} />
                <BoxServices changePage={changePage} t={t}/>
                <ContactUs margin={false} changePage={changePage} t={t}/>
            </div>
    </ParallaxProvider>
    );
    
}

export default Home;