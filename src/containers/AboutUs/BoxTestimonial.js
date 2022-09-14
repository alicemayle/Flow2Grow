import { Box } from '@mui/material';
import React, { Component } from 'react';

class BoxTestimonial extends Component {
    render() {
        const { textContent, classNameTestimonial, author } = this.props;
    return (
        <div className={classNameTestimonial}>
                <Box className='about-us-page-box-testimonial-info'>
                    <span>{textContent}<br></br><br></br></span>
                    <span style={{ fontSize:'15px', fontWeight: 'bold', color: '#007136'}}>{author}</span>
                </Box>
        </div>
    );
    }
}

export default BoxTestimonial;