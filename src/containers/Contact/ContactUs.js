import { Box, Button, TextField } from '@mui/material';
import React, { Component } from 'react';

class ContactUs extends Component {
    state = {
        subject: null,
        message: null
    }
    onChange = ({target}) => {
        this.setState({
            [target.name]: target.value,
        })
    }
    render() {
        const { margin, t } = this.props;
        const { subject, message } = this.state;
        var link = 'mailto:info@flow2grow.com?body='+message+" &subject="+subject;
    return (
        <div className='home-page-box contact-us-page'>
            <Box className='box-contact-us'
                sx={{
                    marginTop: margin ? '26px' : 0,
                    backgroundColor: margin ? 'transparent' : '#e4f3d4'
                }}
            >
                <Box className='box-contact-us-content'>
                    <span className='box-contact-us-content-title'>{t("ContactUsTitle")}<br></br><br></br></span>
                    <div style={{flexDirection: 'row', display: 'flex', width: '100%', alignContent: 'space-between'}}>
                        <div style={{width:'50%', paddingRight: '2%'}}>
                            <TextField id="name" label={t("ContactUsFormName")} variant="standard" margin='dense' fullWidth 
                                inputProps={{style: {fontFamily: 'Raleway', fontSize: 15}}} InputLabelProps={{style: {fontFamily: 'Raleway', fontSize: 15}}}
                            />
                        </div>
                        <div style={{width:'50%', paddingLeft: '2%'}}>
                            <TextField id="email" label={t("ContactUsFormEmail")} variant="standard" required  margin='dense' type='email' fullWidth 
                                inputProps={{style: {fontFamily: 'Raleway', fontSize: 15}}} InputLabelProps={{style: {fontFamily: 'Raleway', fontSize: 15}}}
                            />
                        </div>
                    </div>
                    <div>
                        <TextField name="subject" variant="standard" fullWidth margin='dense' 
                            inputProps={{style: {fontFamily: 'Raleway', fontSize: 15}}} InputLabelProps={{style: {fontFamily: 'Raleway', fontSize: 15}}}
                            label={t("ContactUsFormSubject")}
                            onChange={this.onChange}
                         />
                    </div>
                    {
                        margin &&
                        <div>
                            <TextField id="phone" label={t("ContactUsFormPhone")} variant="standard" fullWidth type='number'  margin='dense'
                                inputProps={{style: {fontFamily: 'Raleway', fontSize: 15}}} InputLabelProps={{style: {fontFamily: 'Raleway', fontSize: 15}}}
                            />
                        </div>
                    }

                    <div>
                    <TextField
                        name="message" label={t("ContactUsFormMessage")} multiline rows={4}
                        inputProps={{style: {fontFamily: 'Raleway', fontSize: 15}}} InputLabelProps={{style: {fontFamily: 'Raleway', fontSize: 15}}}
                        placeholder={t("ContactUsFormMessagePlaceholder")}
                        variant="standard"
                        fullWidth
                        margin='dense'
                        onChange={this.onChange}
                        />
                    </div>
                    <Button variant="contained" color='primary' style={{marginTop: window.screen.width > 500 ? '100px' : '30px'}}
                        href={link}>
                        {t("ContactUsFormButton")}
                    </Button>
                </Box>
                <div className='box-contact-us-image'></div>
            </Box>
        </div>
    );
    }
}

export default ContactUs;