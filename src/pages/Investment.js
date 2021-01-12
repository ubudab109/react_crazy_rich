import { Pagination, Table, TableBody, TableCell, TableContainer, TableFooter, TableHeader } from '@windmill/react-ui';
import React, {useEffect, useState} from 'react';
import CTA from '../components/CTA';
import InvestmentHeaderComp from '../components/Investment/InvestmentHeaderComp';
import ProfitRefund from '../components/Investment/ProfitRefundComp';
import { InvestmentTransaction, WithdrawInvestment } from '../components/Investment/TakeOutInvestComp';
import PageTitle from '../components/Typography/PageTitle';
import SectionTitle from '../components/Typography/SectionTitle';
import InvestTrans from '../utils/demo/invest';
import WdInvestHistory from '../utils/demo/wdInvest';

function Investment(){
    // pages control and setup data for table investment transaction
    const [pageInvest, setpageInvest] = useState(1);
    const [dataInvest, setdataInvest] = useState([]);
    const [showInvest, setshowInvest] = useState(true);

    // pages control and setup data for table withdraw investment history
    const [pageWdInvest, setpageWdInvest] = useState(1);
    const [dataWdInvest, setdataWdInvest] = useState([]);
    const [showWdInvest, setshowWdInvest] = useState(true);

    // pagination setup
    const resultsPerPage = 10;
    const totalInvestment = InvestTrans.length;
    const totalWdInvestment = WdInvestHistory.length;

    // pagination investment transaction
    function investPageChange(p) {
        setpageInvest(p)
    }

    // pagination wd investment history
    function witdhrawPageChange(p) {
        setpageWdInvest(p)
    }
    // effect in pagination investment transaction
    useEffect(() => {
        setdataInvest(InvestTrans.slice((pageInvest - 1)* resultsPerPage, pageInvest * resultsPerPage ))
    }, [pageInvest])

    // effect in pagination withdraw investmenst history
    useEffect(() => {
        setdataWdInvest(WdInvestHistory.slice((pageWdInvest - 1 ) * resultsPerPage, pageWdInvest * resultsPerPage ))
    }, [pageWdInvest])

    // effect for checking length investment transaction
    useEffect(() => {
        if(totalInvestment < 1){
            setshowInvest(false)
        }
    }, [showInvest])

    // effect for checking length investment withdraw history
    useEffect(() => {
        if(totalWdInvestment < 1){
            setshowWdInvest(false)
        }
    }, [showWdInvest])

    return(
        <>
            <PageTitle></PageTitle>

            <CTA />
            <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                <InvestmentHeaderComp title="CRAZY RICH BOT" subtitle="Minimum Invest $ 100,00" desc1="Get UP TO 5% Daily" desc2="90 days contract circle" desc3="Investor ID: ******" desc4="Investor Password:******" />
                <InvestmentHeaderComp title="CRAZY RICH BOT" subtitle="Minimum Invest $ 100,00" desc1="Get UP TO 5% Daily" desc2="90 days contract circle" desc3="Investor ID: ******" desc4="Investor Password:******" />
                <InvestmentHeaderComp title="CRAZY RICH BOT" subtitle="Minimum Invest $ 100,00" desc1="Get UP TO 5% Daily" desc2="90 days contract circle" desc3="Investor ID: ******" desc4="Investor Password:******" />
                <InvestmentHeaderComp title="CRAZY RICH BOT" subtitle="Minimum Invest $ 100,00" desc1="Get UP TO 5% Daily" desc2="90 days contract circle" desc3="Investor ID: ******" desc4="Investor Password:******" />
            </div>
            <ProfitRefund value="$ 3000" />

            <br/>
            <SectionTitle>Investment Transaction</SectionTitle>
            <TableContainer className="mb-8">
                <Table>
                <TableHeader>
                    <tr>
                    <TableCell>Invest Date</TableCell>
                    <TableCell>Contract ID</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Investment</TableCell>
                    <TableCell>Left Days</TableCell>
                    <TableCell>Status</TableCell>
                    </tr>   
                </TableHeader>
                <TableBody>
                    {showInvest ? dataInvest.map((investTrans, i) => (
                        <InvestmentTransaction key={i} date={investTrans.date_invest} contract_id={investTrans.contract_id} paket_id={investTrans.paket_id} amount_invest={investTrans.amount_invest} persen_profit={investTrans.persen_profit} day_left={investTrans.day_left} invest_status={investTrans.invest_status} />
                    )) : 
                    <TableCell colSpan="7" className="text-center">No Data</TableCell>
                    }
                </TableBody>
                </Table>
                <TableFooter>
                <Pagination
                    totalResults={totalInvestment}
                    resultsPerPage={resultsPerPage}
                    onChange={investPageChange}
                    label="Table navigation"
                />
                </TableFooter>
            </TableContainer>

            <SectionTitle>Withdraw History</SectionTitle>
            <TableContainer className="mb-8">
                <Table>
                <TableHeader>
                    <tr>
                    <TableCell>Date</TableCell>
                    <TableCell>Withdraw ID</TableCell>
                    <TableCell>Withdraw Invest</TableCell>
                    <TableCell>Amount Withdraw</TableCell>
                    <TableCell>Status</TableCell>
                    </tr>   
                </TableHeader>
                <TableBody>
                    {showWdInvest ? dataWdInvest.map((wdHistInvest, i) => (
                        <WithdrawInvestment key={i} date={wdHistInvest.date} wd_id={wdHistInvest.wd_id} wd_beforefee={wdHistInvest.wd_beforefee} total_wd={wdHistInvest.total_wd} status={wdHistInvest.status} />
                    )) : 
                    <TableCell colSpan="5" className="text-center">No Data</TableCell>
                    }
                </TableBody>
                </Table>
                <TableFooter>
                <Pagination
                    totalResults={totalWdInvestment}
                    resultsPerPage={resultsPerPage}
                    onChange={witdhrawPageChange}
                    label="Table navigation"
                />
                </TableFooter>
            </TableContainer>


        </>
    )
}

export default Investment;