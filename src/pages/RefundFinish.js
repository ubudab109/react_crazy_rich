import React from 'react';
import CTA from '../components/CTA';
import RefundFinishComp from '../components/Transactions/RefundFinishComp';
import PageTitle from '../components/Typography/PageTitle';

function RefundFinishPages(){

    return(
        <>
            <br/>
            <CTA/>
            <PageTitle>Refund Finish Investment</PageTitle>
            <RefundFinishComp/>
        </>
    )

}

export default RefundFinishPages;