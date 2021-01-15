import React, { useState, useEffect } from 'react'

import PageTitle from '../components/Typography/PageTitle'
import SectionTitle from '../components/Typography/SectionTitle'
import CTA from '../components/CTA'
import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  TableFooter,
  TableContainer,
  Pagination,
} from '@windmill/react-ui'

import Deposit from '../utils/demo/dpData'
import Withdraw from '../utils/demo/wdData'
import UserBalance from '../components/InfoBalance'
import { DepositData} from '../components/DepositWithdraw/Deposit'
import { WitdhrawData} from '../components/DepositWithdraw/Withdraw'
// make a copy of the data, for the second table

function DepoWdData() {
//   pages control and setup data for table deposit
  const [pageDeposit, setPageDeposit] = useState(1);
  const [dataDeposit, setDataDeposit] = useState([]);
  const [showDeposit, setShowDeposit] = useState(true);

  // Page control and setup data for witdhraw deposit
  const [pageWithdraw, setPageWithdraw] = useState(1);
  const [dataWd, setDataWd] = useState([]);
  const [showWd, setShowWd] = useState(true);

  // pagination setup
  const resultsPerPage = 10
  const totalDeposit = Deposit.length
  const totalWithdraw = Withdraw.length

    //   pagination deposit
    function depositPageChange(p){
        setPageDeposit(p)
    };

    // pagination withdraw
    function withdrawPageChane(p) {
      setPageWithdraw(p)
    };

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setDataDeposit(Deposit.slice((pageDeposit - 1) * resultsPerPage, pageDeposit * resultsPerPage))
  }, [pageDeposit])

  useEffect(() => {
      if(totalDeposit < 1){
          setShowDeposit(false)
      }
  },[showDeposit])

  // withdraw
  useEffect(()=> {
    setDataWd(Withdraw.slice((pageWithdraw - 1) * resultsPerPage, pageWithdraw * resultsPerPage))
  }, [pageWithdraw])

  useEffect(() => {
    if(totalWithdraw < 1){
      setShowWd(false)
    }
  }, [showWd])


  return (
    <>
        <br/>
        <CTA />
        <PageTitle></PageTitle>
        <UserBalance />

        <br/>
        <SectionTitle>Deposit History</SectionTitle>
        <TableContainer className="mb-8">
            <Table>
            <TableHeader>
                <tr>
                <TableCell>Date</TableCell>
                <TableCell>Deposit ID</TableCell>
                <TableCell>Deposit USD</TableCell>
                <TableCell>Deposit USDT</TableCell>
                <TableCell>Status</TableCell>
                </tr>   
            </TableHeader>
            <TableBody>
                {showDeposit ? dataDeposit.map((deposit, i) => (
                    <DepositData key={i} date={deposit.date} depositId={deposit.depositId} usd={deposit.usd} status={deposit.status} usdt={deposit.usdt}  />
                )) : 
                <TableCell colSpan="5" className="text-center">No Data</TableCell>
                }
            </TableBody>
            </Table>
            <TableFooter>
            <Pagination
                totalResults={totalDeposit}
                resultsPerPage={resultsPerPage}
                onChange={depositPageChange}
                label="Table navigation"
            />
            </TableFooter>
        </TableContainer>

        {/* Withdraw */}
        <SectionTitle>Withdraw History</SectionTitle>
        <TableContainer className="mb-8">
            <Table>
            <TableHeader>
                <tr>
                <TableCell>Date</TableCell>
                <TableCell>Withdraw ID</TableCell>
                <TableCell>Withdraw USD</TableCell>
                <TableCell>Withdraw USDT</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Withdraw TXID</TableCell>
                <TableCell>Address</TableCell>
                </tr>   
            </TableHeader>
            <TableBody>
                {showWd ? dataWd.map((wd, i) => (
                    <WitdhrawData key={i} date={wd.date} withdrawId={wd.withdrawId} usd={wd.usd} status={wd.status} usdt={wd.usdt} txid={wd.txid} address={wd.address} />
                )) :
                <TableCell colSpan="7" className="text-center">No Data</TableCell>
              }
            </TableBody>
            </Table>
            <TableFooter>
            <Pagination
                totalResults={totalWithdraw}
                resultsPerPage={resultsPerPage}
                onChange={withdrawPageChane}
                label="Table navigation"
            />
            </TableFooter>
        </TableContainer>
    </>
  )
}

export default DepoWdData
