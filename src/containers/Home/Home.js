import React from 'react';
import { Parallax, ParallaxProvider  } from 'react-scroll-parallax';
import BoxAboutUs from './BoxAboutAs';
import BoxServices from './BoxServices';
import ContactUs from '../Contact/ContactUs';
import '../../styles.css';

function Home ({changePage, t }) {
    return (
        <ParallaxProvider scrollAxis='vertical'>
            <div className='home-page'>
                <div className='home-page-title'>
                      <Parallax speed={-200} className='parallax'>
                          <div className='ratio'>
                              <div className='inner'>
                                  <Parallax speed={30} className="box">
                                  <span className='home-page-title-font'>Flow2Grow</span>
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