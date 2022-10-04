import { Box } from '@mui/material';
import React, { Component } from 'react';

class BoxServiceInfo extends Component {
    render() {
        const { image, textContent, textTitle, children } = this.props;
    return (
        <div className='services-page-box'>
            <Box className='services-page-box-content'>
                <img className='services-page-box-info-image'  
                    src={image} alt={textTitle}
                />
                <Box className='services-page-box-info-text'>
                    <span style={{fontSize: '22px', color: '#007136'}}>{textTitle}<br></br><br></br></span>
                    <span style={{textAlign: children ? 'justify' : 'center'}}>{textContent}</span>
                    {children}
                </Box>
            </Box>
        </div>
    );
    }
}

export default BoxServiceInfo;