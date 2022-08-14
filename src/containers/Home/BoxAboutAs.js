import { Box, Button } from '@mui/material';
import React, { Component } from 'react';

class BoxAboutUs extends Component {
    render() {
        const { changePage } = this.props;
    return (
        <div className='home-page-box'>
            <Box
                sx={{
                    width: '100%',
                    backgroundColor: 'primary.main',
                    flexDirection: 'row',
                    display: 'flex',
                    borderRadius: '1.5em'
                }}
            >
                <Box sx={{ width: '50%',
                    padding: '50px',
                    textAlign: 'center',
                    color: 'white',
                    height: 'auto',
                    fontSize: '16px',
                    lineHeight: '1.65em',
                    fontFamily: 'Raleway, sans-serif'
                    }}>
                    <span style={{fontSize: '40px'}}>ABOUT US<br></br><br></br></span>
                    <span>Here to help you grow.<br></br><br></br></span>
                    <span>Our company helps individuals, families and businesses achieve their financial goals.<br></br><br></br></span>
                    <span>We guide our clients to success through our highly professional and personalised consultancy and management service. We pride ourselves on providing only the best quality and honest advice we can.<br></br>
                    </span>
                    <Button variant="contained" color='info' style={{marginTop: '30px'}}
                        onClick={() => changePage(1)}>
                        Learn more
                    </Button>
                </Box>
                <div className='home-page-box-about-us-image'></div>
            </Box>
        </div>
    );
    }
}

export default BoxAboutUs;