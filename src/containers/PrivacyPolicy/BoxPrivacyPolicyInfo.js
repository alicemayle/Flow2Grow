import { Box } from '@mui/material';
import React, { Component } from 'react';

class BoxPrivacyPolicyInfo extends Component {
    render() {
        const {t } = this.props;
    return (
        <div className='services-page-box'>
            <Box
                sx={{
                    width: '100%',
                    backgroundColor: '#e4f3d4',
                    borderRadius: '1.5em',
                    alignItems: 'center',
                    padding: '50px',
                    fontSize: '18px',
                    lineHeight: '1.65em',
                    fontFamily: 'Raleway, sans-serif',
                    textAlign: 'justify'
                }}
            >
                <span style={{fontSize: '22px', fontWeight: 'bold'}}>{t("PrivacyPolicy")}<br></br><br></br></span>
                <span>{t("PrivacyPolicyBoxInfoContent1")}<br></br></span>
                <ul style={{textAlign: 'justify'}}>
                    <li>{t("PrivacyPolicyBoxInfoContentItem1")}</li>
                    <li>{t("PrivacyPolicyBoxInfoContentItem2")}</li>
                    <li>{t("PrivacyPolicyBoxInfoContentItem3")}</li>
                    <li>{t("PrivacyPolicyBoxInfoContentItem4")}</li>
                    <li>{t("PrivacyPolicyBoxInfoContentItem5")}</li>
                </ul>
                <span>{t("PrivacyPolicyBoxInfoContent2")}<br></br><br></br></span>
                <span style={{fontSize: '22px', fontWeight: 'bold'}}>{t("PrivacyPolicyBoxInfoContent3")}<br></br><br></br></span>
                <span>{t("PrivacyPolicyBoxInfoContent4")}<br></br><br></br></span>
                <span>{t("PrivacyPolicyBoxInfoContent5")}<br></br><br></br></span>
            </Box>
        </div>
    );
    }
}

export default BoxPrivacyPolicyInfo;