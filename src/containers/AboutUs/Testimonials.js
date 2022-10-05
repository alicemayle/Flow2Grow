import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BoxTestimonial from './BoxTestimonial';

class Testimonials extends Component {
    render() {
        const { t } = this.props;
    return (
        <div className='about-us-page-tesmonials'>
            <Carousel showArrows infiniteLoop autoPlay showStatus={false} centerMode centerSlidePercentage={101}>
                <BoxTestimonial
                    classNameTestimonial="about-us-page-box-testimonial-1"
                    author={t("AboutUsAuthorTestimonial1")}
                    textContent={t("AboutUsContentTestimonial1")}
                />
                <BoxTestimonial
                    classNameTestimonial="about-us-page-box-testimonial-2"
                    author={t("AboutUsAuthorTestimonial2")}
                    textContent={t("AboutUsContentTestimonial2")}
                />
                <BoxTestimonial
                    classNameTestimonial="about-us-page-box-testimonial-3"
                    author={t("AboutUsAuthorTestimonial3")}
                    textContent={t("AboutUsContentTestimonial3")}
                />
            </Carousel>
        </div>
        
    );
    }
}

export default Testimonials;