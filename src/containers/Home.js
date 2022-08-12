import React, { Component } from 'react';
import BoxAboutUs from './BoxAboutAs';

class Home extends Component {
    render() {
    return (
        <div className='home-page'>
            <div className='home-page-title'>
                <span className='home-page-title-font'>
                    Flow2Grow
                </span>
            </div>
            <BoxAboutUs />
        </div>
    );
    }
}

export default Home;