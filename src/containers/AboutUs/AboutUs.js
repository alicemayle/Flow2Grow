import { Button } from '@mui/material';
import React, { Component } from 'react';
import BoxServiceInfo from '../Services/BoxServicesInfo';
import imageBox from '../../images/about-us-page-box-info.jpeg';
import ForwardIcon from '@mui/icons-material/Forward';

class AboutUs extends Component {
    render() {
        const { changePage, t } = this.props;
    return (
        <div className='services-page' style={{padding: '150px'}}>
            <BoxServiceInfo { ...this.props } 
                image={imageBox}
                textTitle={t("AboutUsTitle")}
                textContent={t("AboutUsContent")}
                heightBox='inherit'
            >
                <span >
                <br></br><br></br>
                <span style={{textAlign: 'start'}}>{t("AboutUsContentInfo1")}</span>
                    <ul style={{textAlign: 'justify'}}>
                        <li>{t("AboutUsContentInfoItem1")}</li>
                        <li>{t("AboutUsContentInfoItem2")}</li>
                        <li>{t("AboutUsContentInfoItem3")}</li>
                        <li>{t("AboutUsContentInfoItem4")}</li>
                    </ul>
                <br></br>{t("AboutUsContentInfo2")}
                <br></br><br></br>{t("AboutUsContentInfo3")}
                <ul style={{textAlign: 'justify'}}>
                        <li>{t("AboutUsContentInfoItem5")}</li>
                        <li>{t("AboutUsContentInfoItem6")}</li>
                        <li>{t("AboutUsContentInfoItem7")}</li>
                        <li>{t("AboutUsContentInfoItem8")}</li>
                        <li>{t("AboutUsContentInfoItem9")}</li>
                    </ul>
                </span>
                
            </BoxServiceInfo>
            <div className='services-page-title'>
                <span style={{fontSize: '50px', color: '#007136'}}>
                    Testimonials
                </span>
            </div>
            <Button variant='contained' size='large' endIcon={<ForwardIcon />} style={{ width: '100%', backgroundColor: '#b9e38c'}}
                onClick={() => changePage(4)}>
                Click here to set up a meeting
            </Button>
        </div>
    );
    }
}

export default AboutUs;