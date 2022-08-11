import { Box } from '@mui/material';
import React, { Component } from 'react';

class Home extends Component {
    render() {
    return (
        <div className='home-page'>
            <div className='home-page-title'>
                <h2 style={{fontSize: '85px', lineHeight: 'normal', textAlign: 'center', fontWeight: 'bold', color: 'white', 
                fontFamily: 'wfont_ff856c_91bbe31bb7ee4da2b31834d4db7f6672,wf_91bbe31bb7ee4da2b31834d4d,orig_aruallight'}}>
                    Flow2Grow
                </h2>
            </div>
        </div>
    );
    }
}

export default Home;