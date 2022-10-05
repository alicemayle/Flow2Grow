import { Button } from '@mui/material';
import React, { Component } from 'react';
import BoxServiceInfo from './BoxServicesInfo';
import investments from '../../images/business-page-box-info-investments.jpeg';
import enterprise from '../../images/business-page-box-info-enterprise-support.jpeg';

class Business extends Component {
    render() {
        const { changePage, t } = this.props;
    return (
        <div className='services-page'>
            <div className='services-page-title'>
                <span  className='services-page-title-text'>
                    {t("BusinessTitle")}
                </span>
                <div className='service-page-title-spacing'>
                    <span>{t("BusinessSubtitle")}</span>
                </div>
            </div>
            <BoxServiceInfo { ...this.props } 
                image={investments}
                textTitle={t("BusinessBoxInfoTitleInvestments")}
                textContent={t("BusinessBoxInfoContentInvestments")}
            >
                <ul style={{textAlign: 'justify'}}>
                    <li>{t("BusinessBoxInfoContentInvestmentsItem1")}</li>
                    <li>{t("BusinessBoxInfoContentInvestmentsItem2")}</li>
                    <li>{t("BusinessBoxInfoContentInvestmentsItem3")}</li>
                    <li>{t("BusinessBoxInfoContentInvestmentsItem4")}</li>
                    <li>{t("BusinessBoxInfoContentInvestmentsItem5")}</li>
                </ul>
            </BoxServiceInfo>
            <BoxServiceInfo { ...this.props } 
                image={enterprise}
                textTitle={t("BusinessBoxInfoTitleEnterprise")}
                textContent={t("BusinessBoxInfoContentEnterprise")}
            >
                <ul style={{textAlign: 'justify'}}>
                    <li>{t("BusinessBoxInfoContentEnterpriseItem1")}</li>
                    <li>{t("BusinessBoxInfoContentEnterpriseItem2")}</li>
                    <li>{t("BusinessBoxInfoContentEnterpriseItem3")}</li>
                    <li>{t("BusinessBoxInfoContentEnterpriseItem4")}</li>
                    <li>{t("BusinessBoxInfoContentEnterpriseItem5")}</li>
                </ul>
            </BoxServiceInfo>
            <Button variant="contained" style={{marginBottom: window.screen.width > 650 ? '40px' : '30px'}}
                onClick={() => changePage(4)}>
                {t("ButtonContactUs")}
            </Button>
        </div>
    );
    }
}

export default Business;