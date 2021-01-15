import { Pagination, Table, TableBody, TableCell, TableContainer, TableFooter, TableHeader } from '@windmill/react-ui';
import React, {useEffect, useState} from 'react';
import RefundData from '../../utils/demo/refundData';
import { RefundFinishInvestment } from './Data/RefundFinishData';


function RefundFinishComp(){
    // pages control and setup Refund Finish 
    const [pageRefundFinish, setPageRefundFinish] = useState(1);
    const [dataRefundFinish, setDataRefundFinish] = useState([]);
    const [showRefundFinish, setShowRefundFinish] = useState(true);


    // pagination setup
    const resultsPerPage = 10;
    const totalReferralBonus = RefundData.length;

    // pagination change
    function pageChangeRefundFinish(p) {
        setPageRefundFinish(p);
    }

    // effect for pagination
    useEffect(() => {
        setDataRefundFinish(RefundData.slice((pageRefundFinish - 1 ) * resultsPerPage, pageRefundFinish * resultsPerPage))
    }, [pageRefundFinish]);

    // effect for show or hide data
    useEffect(() => {
        if(RefundData.length < 1){
            setShowRefundFinish(false)
        }
    }, [showRefundFinish])

    return(
        <TableContainer className="mb-8">
            <Table>
                <TableHeader>
                    <tr>
                        <TableCell>Date</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Desc</TableCell>
                    </tr>
                </TableHeader>
                <TableBody>
                    {
                        showRefundFinish ? dataRefundFinish.map((refund, i ) => (
                            <RefundFinishInvestment key={i} id={i} date={refund.date} amount={refund.amount} desc={refund.desc} />
                        )) : <TableCell colSpan="3" className="text-center">No Data</TableCell>
                    }
                </TableBody>
            </Table>
            <TableFooter>
                <Pagination 
                    totalResults={totalReferralBonus}
                    resultsPerPage={resultsPerPage}
                    onChange={pageChangeRefundFinish}
                    label="Table navigation"
                />
            </TableFooter>
        </TableContainer>
    )
}

export default RefundFinishComp;