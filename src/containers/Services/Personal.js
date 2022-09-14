import { Button } from '@mui/material';
import React, { Component } from 'react';
import BoxServiceInfo from './BoxServicesInfo';
import investments from '../../images/personal-box-info-investments.jpeg';
import retirement from '../../images/personal-box-info-retirement.jpeg';
import other from '../../images/personal-box-info-other.jpeg'

class Personal extends Component {
    render() {
        const { changePage, t } = this.props;
    return (
        <div className='services-page'>
            <div className='services-page-title'>
                <span className='services-page-title-text'>
                    {t("PersonalTitle")}
                </span><br></br><br></br>
                <span>{t("PersonalSubtitle")}<br></br></span>
            </div>
            <BoxServiceInfo { ...this.props } 
                image={investments}
                textTitle={t("PersonalBoxInfoTitleInvestments")}
                textContent={t("PersonalBoxInfoContentInvestments")}
            />
            <BoxServiceInfo { ...this.props } 
                image={retirement}
                textTitle={t("PersonalBoxInfoTitleRetirement")}
                textContent={t("PersonalBoxInfoContentRetirement")}
            />
            <BoxServiceInfo { ...this.props } 
                image={other}
                textTitle={t("PersonalBoxInfoTitleOther")}
                textContent={t("PersonalBoxInfoContentOther")}
            />
            <Button variant="contained" style={{marginBottom: '30px'}}
                onClick={() => changePage(4)}>
                {t("ButtonContactUs")}
            </Button>
        </div>
    );
    }
}

export default Personal;