import React, { Component } from 'react';
import { Button, Card } from '@windmill/react-ui';
import InfoCard from '../Cards/InfoCard';
import { CreditCard, Withdraw } from '../../icons';
import RoundIcon from '../RoundIcon';
import { connect } from 'react-redux';

class ProfitRefund extends Component{
    render(){
        return(
            <>
            <Card className="justify-left">
                <InfoCard title="Your Balance" value={`$${this.props.saldo}`}>
                <RoundIcon
                    icon={CreditCard}
                    iconColorClass="text-orange-500 dark:text-orange-100"
                    bgColorClass="bg-orange-100 dark:bg-orange-500"
                    className="mr-12"
                />
                </InfoCard>
                <hr/>
                <div className="flex justify-center">
                <Button className="text-yellow-600 dark:text-yellow-400 m-8" layout="link" size="icon" aria-label="Delete">
                    <Withdraw className="w-3 h-3 mr-1" aria-hidden="true" />
                    <span className="text-xs">Withdraw</span>
                </Button>
                </div>
            </Card>
        </>
        )
    }
}

const mapStateToProps = (state) => ({
    saldo: state.users.saldo_invest
})

export default connect(mapStateToProps)(ProfitRefund);
