import { Button, Card } from '@windmill/react-ui';
import React, { Component } from 'react';
import { Deposit, Wallet, Withdraw } from '../icons';
import InfoCard from './Cards/InfoCard';
import DepositModal from './DepositWithdraw/DepositModal';
import WithdrawModal from './DepositWithdraw/WithdrawModal';
import RoundIcon from './RoundIcon';

class UserBalance extends Component{
    state = {
        DepositModal: false,
        WithdrawModal: false,
    }

    constructor(props){
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.handleShowWdModal = this.handleShowWdModal.bind(this);
        this.handleCloseWdModal = this.handleCloseWdModal.bind(this);
    }

    handleShow(e){
        this.setState({
            DepositModal: true
        })
    }

    handleClose(e){
        this.setState({
            DepositModal: false
        })
    }

    handleShowWdModal(e){
        this.setState({
            WithdrawModal: true
        })
    }

    handleCloseWdModal(e){
        this.setState({
            WithdrawModal: false,
        })
    }

    
    render(){
        return(
            <>
            
            <DepositModal openModal={this.state.DepositModal} closeModal={this.handleClose}/>
            <WithdrawModal openModal={this.state.WithdrawModal} closeModal={this.handleCloseWdModal} />
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
                <Button className="text-yellow-600 dark:text-yellow-400 m-8" layout="link" size="icon" aria-label="Deposit" onClick={this.handleShow} >
                    <Deposit className="w-3 h-3 mr-1" aria-hidden="true" />
                    <span className="text-xs">Deposit</span>
                </Button>
                <Button  className="text-yellow-600 dark:text-yellow-400 m-8" layout="link" size="icon" aria-label="Withdraw" onClick={this.handleShowWdModal}>
                    <Withdraw className="w-3 h-3 mr-1" aria-hidden="true" />
                    <span className="text-xs">Withdraw</span>
                </Button>
                </div>
                
            </Card> 
            </>
        )
    }
}

export default UserBalance;