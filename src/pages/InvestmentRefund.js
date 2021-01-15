import React from 'react';
import CTA from '../components/CTA';
import InvestmentHeaderComp from '../components/Investment/InvestmentHeaderComp';
import InvestmentRefundComp from '../components/Transactions/InvestmenRefundComp';
import PageTitle from '../components/Typography/PageTitle';

function InvestmentRefundPages(){

    return(
        <>
            <br/>
            <CTA/>
            <PageTitle>Investment Refund</PageTitle>
            <InvestmentRefundComp/>
        </>

    )
}

export default InvestmentRefundPages;