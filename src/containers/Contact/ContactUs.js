import { Box, Button, TextField } from '@mui/material';
import React, { Component } from 'react';

class ContactUs extends Component {
    render() {
        const { margin } = this.props;
    return (
        <div className='home-page-box' style={{padding: 0}}>
            <Box
                sx={{
                    width: '100%',
                    flexDirection: 'row',
                    display: 'flex',
                    backgroundColor: '#e4f3d4',
                    marginY: margin ? margin : 0,
                    marginBottom: margin ? 0 : '70px'
                }}
            >
                <Box sx={{ width: '50%',
                    textAlign: 'center',
                    height: 'auto',
                    fontSize: '16px',
                    lineHeight: '1.65em',
                    fontFamily: 'Raleway, sans-serif',
                    padding: '70px',
                    }}>
                    <span style={{fontSize: '40px', color: '#007136'}}>CONTACT US<br></br><br></br></span>
                    <div style={{flexDirection: 'row', display: 'flex', width: '100%', alignContent: 'space-between'}}>
                        <div style={{width:'50%', paddingRight: '2%'}}>
                            <TextField id="name" label="Name" variant="standard" margin='dense' fullWidth/>
                        </div>
                        <div style={{width:'50%', paddingLeft: '2%'}}>
                            <TextField id="email" label="Email" variant="standard" required  margin='dense' type='email' fullWidth />
                        </div>
                    </div>
                    <div>
                        <TextField id="subject" label="Subject" variant="standard" fullWidth margin='dense'/>
                    </div>
                    <div>
                        <TextField id="phone" label="Phone number" variant="standard" fullWidth type='number'  margin='dense'/>
                    </div>
                    <div>
                    <TextField
                        id="mesage" label="Message" multiline rows={4}
                        placeholder="Type your message"
                        variant="standard"
                        fullWidth
                        margin='dense'
                        />
                    </div>
                    <Button variant="contained" color='primary' style={{marginTop: '30px'}}>Submit</Button>
                </Box>
                <div className='box-contact-us-image'></div>
            </Box>
        </div>
    );
    }
}

export default ContactUs;