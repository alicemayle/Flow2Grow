import { Button } from '@mui/material';
import React, { Component } from 'react';
import BoxServiceInfo from './BoxServicesInfo';
import investments from '../../images/personal-box-info-investments.jpeg';
import retirement from '../../images/personal-box-info-retirement.jpeg';
import other from '../../images/personal-box-info-other.jpeg'

class Personal extends Component {
    render() {
        const { changePage } = this.props;
    return (
        <div className='services-page'>
            <div className='services-page-title'>
                <span style={{fontSize: '48px', fontWeight: 'bold', color: '#007136'}}>
                    PERSONAL
                </span><br></br><br></br>
                <span>Asset & Wealth Management Services for individuals and families.<br></br></span>
            </div>
            <BoxServiceInfo { ...this.props } 
                image={investments}
                textTitle={"INVESTMENTS & SAVING SOLUTIONS"}
                textContent={"If you’re looking to make wise investment decisions, Flow2Grow should be your first point of call. We will carefully guide you through our investment consultancy process, from beginning to end. Starting with a full assessment of your current situation, we will take this information, carefully analyse it and then produce an in-depth report. The next stage is then to help you formulate, and implement a strategy, utilising our wealth of knowledge and network of partners. We are brokers for many of the world´s leading banks and financial institutions."}
            />
            <BoxServiceInfo { ...this.props } 
                image={retirement}
                textTitle={"RETIREMENT & ESTATE PLANNING"}
                textContent={"People often talk of retirement, and the goals and dreams they have in mind, but rarely do we hear of how they plan to get to that point financially. ´Retirement´ does not necessarily have to mean a time when we stop working all together, it can be a point in time where we can simply choose to work or not, as we are already financial independent. Our work at Flow2Grow is to guide you and your family all of the way to this point."}
            />
            <BoxServiceInfo { ...this.props } 
                image={other}
                textTitle={"OTHER SERVICES"}
                textContent={"Over the years we have forged strong partnerships with companies in other sectors in order to be able to provide the most complete possible service to our clients. We work with a network of lawyers, accountants and tax advisers, all of the highest quality and reputation."}
            />
            <Button variant="contained" style={{marginBottom: '30px'}}
                onClick={() => changePage(4)}>
                Contact Us
            </Button>
        </div>
    );
    }
}

export default Personal;