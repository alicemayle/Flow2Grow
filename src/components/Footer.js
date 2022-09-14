import { Button, IconButton, Tooltip } from '@mui/material';
import React, { Component } from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

class Footer extends Component {
    render() {
        const { changePage, t } = this.props;
    return (
        <div className='footer'>
            <div className='box-icons-footer display-footer' style={{textAlign: 'left'}}>
                <span style={{fontSize: 'small'}}>
                    ©2020 by Flow2Grow.
                </span>
            </div>
            <div className='box-icons-footer display-footer'  style={{textAlign: 'center'}}>
                <Button variant="text" color='info' onClick={() => changePage(5)}>
                    {t("PrivacyPolicy")}
                </Button>
            </div>
            <div className='box-min-footer'  style={{textAlign: 'left'}}>
                <Button variant="text" color='info' onClick={() => changePage(5)}>
                    {t("PrivacyPolicy")}
                </Button>
                <span>
                    ©2020 by Flow2Grow.
                </span>
            </div>
            <div className='box-icons-footer'  style={{textAlign: 'right'}}>
                <Tooltip title="(+52) 55 3101 2794">
                    <IconButton href='tel:+52 55 3101 2794' color="info" aria-label="contact phone">
                        <PhoneIcon />
                    </IconButton>
                </Tooltip>
                <IconButton href='https://wa.me/message/UWDAGXYAIKNFK1' color="info" aria-label="contact whatsapp">
                    <WhatsAppIcon />
                </IconButton>
                <Tooltip title="Info@flow2grow.com">
                    <IconButton href='mailto:info@flow2grow.com' color="info" aria-label="contact email">
                        <EmailIcon />
                    </IconButton>
                </Tooltip>
            </div>
      </div>
    );
    }
}

export default Footer;