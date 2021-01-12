import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends} from '@fortawesome/free-solid-svg-icons'
import React, {useEffect, useState} from 'react';
import CTA from '../components/CTA';
import PageTitle from '../components/Typography/PageTitle';
import {UserPlus } from '../icons';
import { Button, Pagination, Table, TableBody, TableCell, TableContainer, TableFooter, TableHeader } from '@windmill/react-ui';
import { Link } from 'react-router-dom'
import ReferralData from '../utils/demo/referralData';
import { ReferralComp } from '../components/Referral/ReferralComp';


function Referral(){
    // pages control and setup data for table referral
    const [pageReferral, setpageReferral] = useState(1);
    const [dataReferral, setdataReferral] = useState([]);
    const [showReferral, setshowReferral] = useState(true);

    // pagination setup
    const resultsPerPage = 10;
    const totalReferral = ReferralData.length

    // pagination referral 
    function referralPageChange(p) {
        setpageReferral(p)
    }

    // effect in paginatino referral
    useEffect(() => {
        setdataReferral(ReferralData.slice((pageReferral - 1)* resultsPerPage, pageReferral * resultsPerPage))
    }, [pageReferral])

    // check 
    useEffect(() => {
        if(totalReferral < 1){
            setshowReferral(false)
        }
    }, [showReferral])

    return(
        <>
            <br/>
            <CTA/>
            <PageTitle>
                <FontAwesomeIcon icon={faUserFriends} className="mx-2"/>
                My Referral
            </PageTitle>

            <div className="grid grid-cols-3 gap-4">
            <Button size="small" tag={Link} to="/app/forms" iconLeft={UserPlus} className="bg-orange-300 dark:bg-orange-500 col-end-7 col-span-2">
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
                    {showReferral ? dataReferral.map((refData, i) => (
                        <ReferralComp key={i} name={refData.name} email={refData.email} date={refData.join} refCode={refData.refcode} />
                    )) : 
                    <TableCell colSpan="4" className="text-center">No Data</TableCell>
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