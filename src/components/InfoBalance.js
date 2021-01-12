import { Button, Card } from '@windmill/react-ui';
import React from 'react';
import { Deposit, Wallet, Withdraw } from '../icons';
import InfoCard from './Cards/InfoCard';
import RoundIcon from './RoundIcon';

function UserBalance(){
    return(
        <>
            <Card className="justify-left">
                <InfoCard title="Your Balance" value="$ 6389">
                <RoundIcon
                    icon={Wallet}
                    iconColorClass="text-orange-500 dark:text-orange-100"
                    bgColorClass="bg-orange-100 dark:bg-orange-500"
                    className="mr-12"
                />
                </InfoCard>
                <hr/>
                <div className="flex justify-center">
                <Button className="text-yellow-600 dark:text-yellow-400 m-8" layout="link" size="icon" aria-label="Edit">
                    <Deposit className="w-3 h-3 mr-1" aria-hidden="true" />
                    <span className="text-xs">Deposit</span>
                </Button>
                <Button className="text-yellow-600 dark:text-yellow-400 m-8" layout="link" size="icon" aria-label="Delete">
                    <Withdraw className="w-3 h-3 mr-1" aria-hidden="true" />
                    <span className="text-xs">Withdraw</span>
                </Button>
                </div>
                
            </Card>
            
        </>
    )
}

export default UserBalance;