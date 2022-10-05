import { Button } from '@mui/material';
import React, { Component } from 'react';
import BoxAboutUsInfo from './BoxAboutUsInfo';
import imageBox from '../../images/about-us-page-box-info.jpeg';
import ForwardIcon from '@mui/icons-material/Forward';
import Testimonials from './Testimonials';

class AboutUs extends Component {
    render() {
        const { changePage, t } = this.props;
    return (
        <div className='services-page'>
            <div className='services-page-title'>
                <span className='services-page-title-text'>
                    {t("AboutUsTitle")}
                </span>
                <div className='service-page-title-spacing'>
                    <span>{t("AboutUsContent")}</span>
                </div>
            </div>
            <BoxAboutUsInfo { ...this.props } 
                image={imageBox}
                textTitle={t("AboutUsTitle")}
                textContent={t("AboutUsContent")}
            />
            <div className='services-page-title services-page-title-text about-us-page-testimonials-title'>
                <span>{t("AboutUsTestimonialsTitle")}</span>
            </div>
            <Testimonials t={t} />
            <div  className='about-us-button-here-large'>
                <Button variant='contained' size='large'
                    endIcon={<ForwardIcon style={{fontSize:'50px'}}/>} 
                    style={{ width: '90%', backgroundColor: '#b9e38c', marginBottom: '55px',
                        fontSize: '36px', textTransform: 'none', fontFamily: 'Raleway'}}
                    onClick={() => changePage(4)}>
                    {t("AboutUsButtonHere")}
                </Button>
            </div>
            <div className='about-us-button-here-small'>
                <Button variant='contained' size='small'
                    style={{ width: '90%', backgroundColor: '#b9e38c', marginBottom: '55px', 
                        fontSize: '25px', textTransform: 'none', fontFamily: 'Raleway'}}
                    onClick={() => changePage(4)}>
                    {t("AboutUsButtonHere")}
                </Button>
            </div>
        </div>
    );
    }
}

export default AboutUs;