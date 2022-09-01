import { Box, Button } from '@mui/material';
import React, { Component } from 'react';

class BoxAboutUs extends Component {
    render() {
        const { changePage, t } = this.props;
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
                    <span style={{fontSize: '40px'}}>{t("HomeBoxAboutUsTitle")}<br></br><br></br></span>
                    <span>{t("HomeBoxAboutUsContent1")}<br></br><br></br></span>
                    <span>{t("HomeBoxAboutUsContent2")}<br></br><br></br></span>
                    <span>{t("HomeBoxAboutUsContent3")}<br></br>
                    </span>
                    <Button variant="contained" color='info' style={{marginTop: '30px'}}
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