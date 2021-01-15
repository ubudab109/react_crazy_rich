import React from 'react';
import CTA from '../components/CTA';
import ProfitTradeComp from '../components/Transactions/ProfitTradeComp';
import PageTitle from '../components/Typography/PageTitle';


function ProfitTradePages(){
    return(
        <>
            <br/>
            <CTA />
            <PageTitle>Profit Trade</PageTitle>

            <ProfitTradeComp />

        </>
    )
}

export default ProfitTradePages;