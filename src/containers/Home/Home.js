import React, { Component } from 'react';
import BoxAboutUs from './BoxAboutAs';
import BoxServices from './BoxServices';
import ContactUs from '../Contact/ContactUs';

class Home extends Component {
    render() {
    return (
        <div className='home-page'>
            <div className='home-page-title'>
                <span className='home-page-title-font'>
                    Flow2Grow
                </span>
            </div>
            <BoxAboutUs { ...this.props } />
            <BoxServices { ...this.props }/>
            <ContactUs margin='70px' { ...this.props }/>
        </div>
    );
    }
}

export default Home;