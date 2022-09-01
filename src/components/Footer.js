import { Button, IconButton } from '@mui/material';
import React, { Component } from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

class Footer extends Component {
    render() {
        const { changePage, t } = this.props;
    return (
        <div className='footer'>
            <div className='box-icons-footer' style={{textAlign: 'left'}}>
                <span style={{fontSize: 'small'}}>
                    ©2020 by Flow2Grow.
                </span>
            </div>
            <div className='box-icons-footer'  style={{textAlign: 'center'}}>
                <Button variant="text" color='info' onClick={() => changePage(5)}>
                    {t("PrivacyPolicy")}
                </Button>
            </div>
            <div className='box-icons-footer'  style={{textAlign: 'right'}}>
                <IconButton color="info" aria-label="contact phone">
                    <PhoneIcon />
                </IconButton>
                <IconButton color="info" aria-label="contact whatsapp">
                    <WhatsAppIcon />
                </IconButton>
                <IconButton color="info" aria-label="contact email">
                    <EmailIcon />
                </IconButton>

            </div>
      </div>
    );
    }
}

export default Footer;