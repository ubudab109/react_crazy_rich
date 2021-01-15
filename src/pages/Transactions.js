import React from 'react';
import CTA from '../components/CTA';
import PageTitle from '../components/Typography/PageTitle';
import TransNavBar from '../containers/TransNavBar';



function Transactions(){
    return(
        <>
            <br/>
            <CTA/>
            <PageTitle>Transactions</PageTitle>
            <TransNavBar />
        </>
    )
}

export default Transactions;