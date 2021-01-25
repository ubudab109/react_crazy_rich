import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends} from '@fortawesome/free-solid-svg-icons'
import React, {useEffect, useState} from 'react';
import CTA from '../components/CTA';
import PageTitle from '../components/Typography/PageTitle';
import {UserPlus } from '../icons';
import { Button, Pagination, Table, TableBody, TableCell, TableContainer, TableFooter, TableHeader, TableRow } from '@windmill/react-ui';
import { Link } from 'react-router-dom'
import ReferralData from '../utils/demo/referralData';
import { ReferralComp } from '../components/Referral/ReferralComp';
import { fetchReferral } from '../Redux/Actions/ReferralAction';


function Referral(){
    // pages control and setup data for table referral
    const [pageReferral, setpageReferral] = useState(1);
    const [dataReferral, setdataReferral] = useState([]);
    const [totalReferral, settotalReferral] = useState(0)

    // pagination setup
    const resultsPerPage = 10;
   

    // pagination referral 
    function referralPageChange(p) {
        setpageReferral(p)
    }

    // set total length referral
    useEffect(() => {
        fetchReferral().then(data => settotalReferral(data.length))
    }, [])


    // effect in paginatino referral
    useEffect(() => {
        fetchReferral().then(data => setdataReferral(data.slice((pageReferral - 1)* resultsPerPage, pageReferral * resultsPerPage)))

    }, [pageReferral])

    return(
        <>
            <br/>
            <CTA/>
            <PageTitle>
                <FontAwesomeIcon icon={faUserFriends} className="mx-2"/>
                My Referral
            </PageTitle>

            <div className="grid grid-cols-3 gap-4">
            <Button size="small" tag={Link} to="/app/add-referral" iconLeft={UserPlus} className="bg-orange-300 dark:bg-orange-500 col-end-7 col-span-2">
                <span>Add New User</span>
            </Button>
            </div>
            <br/>

            <TableContainer className="mb-8">
                <Table>
                <TableHeader>
                    <tr>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Join Date</TableCell>
                    <TableCell>Referral Code</TableCell>
                    </tr>   
                </TableHeader>
                <TableBody>
                    {dataReferral.length > 0 ? dataReferral.map((refData, i) => (
                        <ReferralComp key={i} name={refData.full_name} email={refData.email} date={refData.date} refCode={refData.referrer_id} />
                    )) :
                    <TableRow>
                        <TableCell colSpan="4" className="text-center"> No data</TableCell>
                    </TableRow> 
                    }
                </TableBody>
                </Table>
                <TableFooter>
                <Pagination
                    totalResults={totalReferral}
                    resultsPerPage={resultsPerPage}
                    onChange={referralPageChange}
                    label="Table navigation"
                />
                </TableFooter>
            </TableContainer>
        </>
    )
}

export default Referral;