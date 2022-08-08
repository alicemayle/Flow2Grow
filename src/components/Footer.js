import { IconButton } from '@mui/material';
import React, { Component } from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

class Footer extends Component {
    render() {
    return (
        <div className='footer'>
            <div className='boxIconsFooter' style={{textAlign: 'left'}}>
                <span style={{fontSize: 'small'}}>
                    ©2020 by Flow2Grow.
                </span>
            </div>
            <div className='boxIconsFooter'  style={{textAlign: 'center'}}>
                <span>Privacy Policy</span>
                <div>
                <IconButton color="info" aria-label="contact phone">
                    <PhoneIcon />
                </IconButton>
                <IconButton color="info" aria-label="contact phone">
                    <EmailIcon />
                </IconButton>
                </div>
            </div>
            <div className='boxIconsFooter'  style={{textAlign: 'right'}}>
                <IconButton color="info" aria-label="contact twitter">
                    <TwitterIcon />
                </IconButton>
                <IconButton color="info" aria-label="contact facebook">
                    <FacebookIcon />
                </IconButton>
                <IconButton color="info" aria-label="contact instagram">
                    <InstagramIcon />
                </IconButton>
            </div>
      </div>
    );
    }
}

export default Footer;