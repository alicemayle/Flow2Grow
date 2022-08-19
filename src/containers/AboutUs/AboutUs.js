import { Button } from '@mui/material';
import React, { Component } from 'react';
import BoxServiceInfo from '../Services/BoxServicesInfo';
import imageBox from '../../images/about-us-page-box-info.jpeg';
import ForwardIcon from '@mui/icons-material/Forward';

class AboutUs extends Component {
    render() {
        const { changePage } = this.props;
    return (
        <div className='services-page' style={{padding: '150px'}}>
            <BoxServiceInfo { ...this.props } 
                image={imageBox}
                textTitle={"MORE ABOUT US"}
                textContent={"Let's grow!"}
                heightBox='inherit'
            >
                <span >
                <br></br><br></br>
                <span style={{textAlign: 'start'}}>
                    Flow2Grow is a financial and business consultancy firm, benefiting from over 15 years of experience. We have a diverse range of services that we provide to clients, some of our specialties include:
                </span>
                    <ul style={{textAlign: 'justify'}}>
                        <li>Investments and Savings</li>
                        <li>Asset Management</li>
                        <li>Retirement and Estate Planning</li>
                        <li>Business planning, strategy and guidance</li>
                    </ul>
                <br></br>Our business philosophy is simple… to provide the highest possible level of service to our clients. We achieve this by creating and nurturing positive relationships. We are able to do this, as we have a passion for what we do, the rest comes naturally.
                <br></br><br></br>Flow2Grow as a company strive to:
                <ul style={{textAlign: 'justify'}}>
                        <li>Show respect for everyone that surrounds us</li>
                        <li>Minimise any negative impact on our environment and maximise the positive</li>
                        <li>Create opportunities where we see them</li>
                        <li>Constantly learn, innovate and improve where we can</li>
                        <li>Remain humble and open minded at all times</li>
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