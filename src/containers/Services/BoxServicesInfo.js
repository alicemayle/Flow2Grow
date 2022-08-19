import { Box } from '@mui/material';
import React, { Component } from 'react';

class BoxServiceInfo extends Component {
    render() {
        const { image, textContent, textTitle, children, heightBox } = this.props;
    return (
        <div className='services-page-box'>
            <Box
                sx={{
                    width: '100%',
                    backgroundColor: '#e4f3d4',
                    flexDirection: 'row',
                    display: 'flex',
                    borderRadius: '1.5em',
                    alignItems: 'center'
                }}
            >
                <img className='services-page-box-info-image'  
                    style={{height: heightBox ? heightBox : '455px'}} 
                    src={image} alt={textTitle}
                />
                <Box sx={{ width: '50%',
                    padding: '50px',
                    textAlign: 'center',
                    fontSize: '18px',
                    lineHeight: '1.65em',
                    fontFamily: 'Raleway, sans-serif',
                    }}>
                    <span style={{fontSize: '22px', color: '#007136', textAlign: 'center'}}>{textTitle}<br></br><br></br></span>
                    <span>{textContent}</span>
                    {children}
                </Box>
            </Box>
        </div>
    );
    }
}

export default BoxServiceInfo;