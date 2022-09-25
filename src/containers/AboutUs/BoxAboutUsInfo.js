import { Box } from '@mui/material';
import React, { Component } from 'react';

class BoxAboutUsInfo extends Component {
    render() {
        const { image, textContent, textTitle, t } = this.props;
    return (
        <div className='services-page-box about-us-page-box-info'>
            <Box className='services-page-box-content about-us-box-info'>
                <img className='services-page-box-info-image about-us-box-image'  
                    src={image} alt={textTitle}
                />
                <Box className='services-page-box-info-text about-us-box-info-text'>
                    <span style={{fontSize: '40px', color: '#007136', lineHeight: 'normal'}}>{textTitle}<br></br><br></br></span>
                    <span style={{fontSize: '18px'}}>{textContent}<br></br><br></br><br></br></span>
                    <span style={{textAlign: 'justify'}}>{t("AboutUsContentInfo1")}</span>
                    <ul style={{textAlign: 'justify'}}>
                        <li>{t("AboutUsContentInfoItem1")}</li>
                        <li>{t("AboutUsContentInfoItem2")}</li>
                        <li>{t("AboutUsContentInfoItem3")}</li>
                        <li>{t("AboutUsContentInfoItem4")}</li>
                    </ul>
                    <br></br>
                    <span style={{textAlign: 'justify'}}>{t("AboutUsContentInfo2")}<br></br><br></br></span>
                    <span style={{textAlign: 'justify'}}>{t("AboutUsContentInfo3")}</span>
                    <ul style={{textAlign: 'justify'}}>
                        <li>{t("AboutUsContentInfoItem5")}</li>
                        <li>{t("AboutUsContentInfoItem6")}</li>
                        <li>{t("AboutUsContentInfoItem7")}</li>
                        <li>{t("AboutUsContentInfoItem8")}</li>
                        <li>{t("AboutUsContentInfoItem9")}</li>
                    </ul>
                </Box>
            </Box>
        </div>
    );
    }
}

export default BoxAboutUsInfo;