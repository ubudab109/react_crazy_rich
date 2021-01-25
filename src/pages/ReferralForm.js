import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import CTA from '../components/CTA';
import ReferralFormComp from '../components/Referral/ReferralFormComp';
import PageTitle from '../components/Typography/PageTitle';

class ReferralForm extends Component{

    render(){
        return(
            <Fragment>
                <br/>
                <CTA/>
                <PageTitle>
                    <FontAwesomeIcon icon={faUserFriends} className="mx-2"/>
                    Add Member
                </PageTitle>    
                <ReferralFormComp />

            </Fragment>
        )
    }
}

export default ReferralForm;