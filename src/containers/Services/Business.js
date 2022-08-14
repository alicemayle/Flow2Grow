import { Button } from '@mui/material';
import React, { Component } from 'react';
import BoxServiceInfo from './BoxServicesInfo';
import investments from '../../images/business-page-box-info-investments.jpeg';
import enterprise from '../../images/business-page-box-info-enterprise-support.jpeg';

class Business extends Component {
    render() {
        const { changePage } = this.props;
    return (
        <div className='services-page'>
            <div className='services-page-title'>
                <span style={{fontSize: '48px', fontWeight: 'bold', color: '#007136'}}>
                    BUSINESS
                </span><br></br><br></br>
                <span>Services for companies and organisations.<br></br></span>
            </div>
            <BoxServiceInfo { ...this.props } 
                image={investments}
                textTitle={"INVESTMENTS & FINANCE"}
                textContent={"Flow2Grow are leading experts in the field of business finance and investment, drawing upon over 15 years of experience. Some of our specialties include:"}
            >
                <ul style={{textAlign: 'justify'}}>
                    <li>Financial models, planning and structuring</li>
                    <li>Investment, banking and financing solutions</li>
                    <li>Private equity</li>
                    <li>Tax efficiency</li>
                    <li>Employee pensions and benefits</li>
                </ul>
            </BoxServiceInfo>
            <BoxServiceInfo { ...this.props } 
                image={enterprise}
                textTitle={"BUSINESS & ENTERPRISE SUPPORT"}
                textContent={"The team at Flow2Grow are all passionate about business and enterprise, meaning our clients receive the highest quality of service, from people that really care. Some of the ways on which we help clients with their businesses are:"}
            >
                <ul style={{textAlign: 'justify'}}>
                    <li>Start-up advice & business planning</li>
                    <li>Feasibility studies</li>
                    <li>Project management</li>
                    <li>Corporate strategy</li>
                    <li>Business consultancy services</li>
                </ul>
            </BoxServiceInfo>
            <Button variant="contained" style={{marginBottom: '30px'}}
                onClick={() => changePage(4)}>
                Contact Us
            </Button>
        </div>
    );
    }
}

export default Business;