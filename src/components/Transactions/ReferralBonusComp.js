import { Pagination, Table, TableBody, TableCell, TableContainer, TableFooter, TableHeader } from '@windmill/react-ui';
import React, {useState, useEffect} from 'react';
import ReferralBonus from '../../utils/demo/referralTransData';
import { ReferralBonusData } from './Data/ReferralBonus';


function ReferralBonusComp() {
    // pages control and setup data Referral Bonus
    const [pageReferralBonus, setPageReferralBonus] = useState(1);
    const [dataReferralBonus, setDataReferralBonus] = useState([]);
    const [showReferralBonus, setShowReferralBonus] = useState(true);

    // pagination setup
    const resultsPerPage = 10;
    const totalReferralBonus = ReferralBonus.length;

    // pagination referral bonus
    function referralBonusPageChange(p) {
        setPageReferralBonus(p);
    }

    useEffect(() => {
        setDataReferralBonus(ReferralBonus.slice((pageReferralBonus - 1) * resultsPerPage, pageReferralBonus * resultsPerPage))
    }, [pageReferralBonus]);

    useEffect(() => {
        if(ReferralBonus.length < 1){
            setShowReferralBonus(false)
        }
    }, [showReferralBonus]);


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
                    {
                        showReferralBonus ? dataReferralBonus.map((referral, i ) => (
                            <ReferralBonusData key={i} date={referral.date} profit={referral.profit} desc={referral.desc} />
                        )) : <TableCell colSpan="3" className="text-center">No Data</TableCell>
                    }
                </TableBody>
            </Table>
            <TableFooter>
                <Pagination 
                    totalResults={totalReferralBonus}
                    resultsPerPage={resultsPerPage}
                    onChange={referralBonusPageChange}
                    label="Table navigation"
                />
            </TableFooter>
        </TableContainer>
    )
}

export default ReferralBonusComp;