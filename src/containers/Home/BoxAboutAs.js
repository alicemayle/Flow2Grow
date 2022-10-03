import { Box, Button } from '@mui/material';
import React, { Component } from 'react';

class BoxAboutUs extends Component {
    render() {
        const { changePage, t } = this.props;
    return (
        <div className='home-page-box'>
            <Box className='home-page-box-about-us'>
                <Box className='home-page-box-about-us-content'>
                    <span className='font-size-title'>{t("HomeBoxAboutUsTitle")}<br></br><br></br></span>
                    <span>{t("HomeBoxAboutUsContent1")}<br></br><br></br></span>
                    <span>{t("HomeBoxAboutUsContent2")}<br></br><br></br></span>
                    <span>{t("HomeBoxAboutUsContent3")}<br></br></span>
                    <Button variant="contained" color='info' 
                        style={{marginTop: window.screen.width > 500 ? '44px' : '25px'}}
                        onClick={() => changePage(1)}>
                        {t("ButtonLearnMore")}
                    </Button>
                </Box>
                <div className='home-page-box-about-us-image'></div>
            </Box>
        </div>
    );
    }
}

export default BoxAboutUs;