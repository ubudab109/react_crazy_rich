import React, {useEffect, useState} from 'react';
import {
    Table,
    TableHeader,
    TableCell,
    TableBody,
    TableFooter,
    TableContainer,
    Pagination,
  } from '@windmill/react-ui'
import InvestmentData from '../../utils/demo/investmentData'
import { InvestmentRefundData } from './Data/InvestmentRefundData';

function InvestmentRefundComp(){

    // pages control and setup data Investment Refund
    const [pageInvestmentRefund, setPageInvestmentRefund] = useState(1);
    const [dataInvestmentRefund, setDataInvestmentRefund] = useState([]);
    const [showInvestmentRefund, setShowInvestmentRefund] = useState(true);

    // pagination setup
    const resultsPerPage = 10;
    const totalInvestmentRefund = InvestmentData.length

    // pagination Profit TRade

    function investmentPageChange(p) {
        setPageInvestmentRefund(p)
    };

    useEffect(() => {
        setDataInvestmentRefund(InvestmentData.slice((pageInvestmentRefund - 1) * resultsPerPage, pageInvestmentRefund * resultsPerPage))
    }, [pageInvestmentRefund])

    useEffect(() => {
        if(InvestmentData.length < 1){
            setShowInvestmentRefund(false)
        }
    }, [showInvestmentRefund])


    return(
    <TableContainer className="mb-8">
        <Table>
        <TableHeader>
            <tr>
            <TableCell>Date</TableCell>
            <TableCell>Profit</TableCell>
            <TableCell>Description</TableCell>
            </tr>   
        </TableHeader>
        <TableBody>
            {showInvestmentRefund ? dataInvestmentRefund.map((investment, i) => (
                <InvestmentRefundData key={i} date={investment.date} profit={investment.profit} desc={investment.desc}  />
            )) : 
            <TableCell colSpan="3" className="text-center">No Data</TableCell>
            }
        </TableBody>
        </Table>
        <TableFooter>
        <Pagination
            totalResults={totalInvestmentRefund}
            resultsPerPage={resultsPerPage}
            onChange={investmentPageChange}
            label="Table navigation"
        />
        </TableFooter>
    </TableContainer>

    )
}

export default InvestmentRefundComp;