import { Box, Button } from '@mui/material';
import React, { Component } from 'react';
import personalImage from '../../images/home-box-services-personal.jpg';
import businessImage from '../../images/home-box-services-business.jpg';

class BoxServices extends Component {
    render() {
        const { changePage, t } = this.props;
    return (
        <div className='home-page-box'>
            <span className='home-page-box-service-title'>
                {t("HomeBoxServicesTitle")}
            </span>
            <div className='home-page-box-service'>
                <Box className='home-page-box-service-content-left'>
                    <img className='home-page-box-service-image' src={personalImage} alt="PersonalImage"/>
                    <span className='home-page-box-service-content-title'>{t("HomeBoxServicesTitlePersonal")}<br></br><br></br></span>
                    <span>{t("HomeBoxServicesContentPersonal")}<br></br><br></br></span>
                    <Button variant="contained" color='info' style={{marginTop: '30px'}}
                        onClick={() => changePage(2)}>
                        {t("ButtonLearnMore")}
                    </Button>
                </Box>
                <Box className='home-page-box-service-content-right'>
                    <img className='home-page-box-service-image' src={businessImage} alt="BusinessImage"/>
                    <span className='home-page-box-service-content-title'>{t("HomeBoxServicesTitleBusiness")}<br></br><br></br></span>
                    <span>{t("HomeBoxServicesContentBusiness")}<br></br><br></br></span>
                    <Button variant="contained" color='info' style={{marginTop: '30px'}}
                        onClick={() => changePage(3)}>
                        {t("ButtonLearnMore")}
                    </Button>
                </Box>
            </div>
        </div>
    );
    }
}

export default BoxServices;