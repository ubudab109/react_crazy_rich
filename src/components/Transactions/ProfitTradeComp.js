import {
    Table,
    TableHeader,
    TableCell,
    TableBody,
    TableFooter,
    TableContainer,
    Pagination,
  } from '@windmill/react-ui'
import React, { useState, useEffect } from 'react';
import ProfitTrade from '../../utils/demo/profitTrade'
import { ProfitRefundData } from './Data/ProfitRefundData';

function ProfitTradeComp(props){

    // pages control and setup data Profit Trade
    const [pageProfitTrade, setpageProfitTrade] = useState(1);
    const [dataProfitTrade, setdataProfitTrade] = useState([]);
    const [showProfitTrade, setshowProfitTrade] = useState(true);

    // pagination setup
    const resultsPerPage = 10;
    const totalProfit = ProfitTrade.length;

    // pagination Profit TRade

    function profitPageChange(p) {
        setpageProfitTrade(p)
    }

    useEffect(() => {
        setdataProfitTrade(ProfitTrade.slice((pageProfitTrade - 1) * resultsPerPage, pageProfitTrade * resultsPerPage))
    }, [pageProfitTrade])

    useEffect(() => {
        if(ProfitTrade.length < 1){
            setshowProfitTrade(false)
        }
    }, [showProfitTrade])


    return(
        
    <TableContainer className="mb-8" id={props.id}>
        <Table>
        <TableHeader>
            <tr>
            <TableCell>Date</TableCell>
            <TableCell>Profit</TableCell>
            <TableCell>Description</TableCell>
            </tr>   
        </TableHeader>
        <TableBody>
            {showProfitTrade ? dataProfitTrade.map((profit, i) => (
                <ProfitRefundData key={i} date={profit.date} profit={profit.profit} desc={profit.desc}  />
            )) : 
            <TableCell colSpan="3" className="text-center">No Data</TableCell>
            }
        </TableBody>
        </Table>
        <TableFooter>
        <Pagination
            totalResults={totalProfit}
            resultsPerPage={resultsPerPage}
            onChange={profitPageChange}
            label="Table navigation"
        />
        </TableFooter>
    </TableContainer>
        
    )
}

export default ProfitTradeComp;