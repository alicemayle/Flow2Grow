import { Button } from '@mui/material';
import React, { Component } from 'react';
import BoxPrivacyPolicyInfo from './BoxPrivacyPolicyInfo';

class PrivacyPolicy extends Component {
    render() {
        const { changePage, t } = this.props;
    return (
        <div className='services-page'>
            <div className='services-page-title'>
                <span className='services-page-title-text'>
                    {t("PrivacyPolicy")}
                </span><br></br>
            </div>
            <BoxPrivacyPolicyInfo { ...this.props } />
            <Button variant="contained" style={{marginBottom: '40px'}}
                onClick={() => changePage(4)}>
                {t("ButtonContactUs")}
            </Button>
        </div>
    );
    }
}

export default PrivacyPolicy;