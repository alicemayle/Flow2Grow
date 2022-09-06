import { Box, Button } from '@mui/material';
import React, { Component } from 'react';
import personalImage from '../../images/home-box-services-personal.jpg';
import businessImage from '../../images/home-box-services-business.jpg';

class BoxServices extends Component {
    render() {
        const { changePage, t } = this.props;
    return (
        <div className='home-page-box'>
            <span style={{fontSize: '40px', fontFamily: 'Raleway, sans-serif', color:'#007136', fontWeight: 'bold', marginBottom: '70px'}}>
                {t("HomeBoxServicesTitle")}
            </span>
            <div className='home-page-box-service'>
                <Box sx={{
                    width: '35%',
                    paddingBottom: '50px',
                    textAlign: 'center',
                    color: 'white',
                    height: 'auto',
                    fontSize: '18px',
                    lineHeight: '1.65em',
                    fontFamily: 'Raleway, sans-serif',
                    backgroundColor: 'primary.main',
                    marginLeft: '12%',
                    marginRight: '3%',
                    borderRadius: '1.5em'
                    }}>
                    <img className='home-page-box-service-image' src={personalImage} alt="PersonalImage"/>
                    <span style={{fontSize: '24px', fontWeight: 'bold'}}>{t("HomeBoxServicesTitlePersonal")}<br></br><br></br></span>
                    <span>{t("HomeBoxServicesContentPersonal")}<br></br><br></br></span>
                    <Button variant="contained" color='info' style={{marginTop: '30px'}}
                        onClick={() => changePage(2)}>
                        {t("ButtonLearnMore")}
                    </Button>
                </Box>
                <Box sx={{
                    textAlign: 'center',
                    color: 'white',
                    height: 'auto',
                    fontSize: '18px',
                    lineHeight: '1.65em',
                    fontFamily: 'Raleway, sans-serif',
                    backgroundColor: '#ACDA7B',
                    width: '35%',
                    marginLeft: '3%',
                    marginRight: '12%',
                    borderRadius: '1.5em',
                    paddingBottom: '50px',
                    }}>
                    <img className='home-page-box-service-image' src={businessImage} alt="BusinessImage"/>
                    <span style={{fontSize: '24px', fontWeight: 'bold'}}>{t("HomeBoxServicesTitleBusiness")}<br></br><br></br></span>
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