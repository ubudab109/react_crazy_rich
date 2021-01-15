import React from 'react';
import CTA from '../components/CTA';
import ReferralBonusComp from '../components/Transactions/ReferralBonusComp';
import PageTitle from '../components/Typography/PageTitle';


function ReferralBonusPages(){

    return(
        <>
            <br/>
            <CTA/>
            <PageTitle>Referral Bonus</PageTitle>
            <ReferralBonusComp/>
        </>
    )
    
}

export default ReferralBonusPages;