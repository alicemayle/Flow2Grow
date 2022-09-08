import { Box } from '@mui/material';
import React, { Component } from 'react';

class BoxTestimonial extends Component {
    render() {
        const { textContent, classNameTestimonial, author } = this.props;
    return (
        <div className={classNameTestimonial}>
                <Box sx={{ width: '50%', height: '100%',
                    padding: '100px',
                    textAlign: 'center',
                    fontSize: '16px',
                    lineHeight: '1.65em',
                    fontFamily: 'Raleway, italic',
                    backgroundColor: "rgba(250, 250, 250, 0.8)"
                    }}>
                    <span>{textContent}<br></br><br></br></span>
                    <span style={{ fontSize:'15px', fontWeight: 'bold', color: '#007136'}}>{author}</span>
                </Box>
        </div>
    );
    }
}

export default BoxTestimonial;