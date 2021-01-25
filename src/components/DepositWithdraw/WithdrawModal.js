import { Button, Input, Label, Modal, ModalBody, ModalHeader, ModalFooter } from '@windmill/react-ui';
import React, { Component } from 'react';


class WithdrawModal extends Component{
    state = {
        withdrawInput:{},
        withdrawConf:{
            fee: 0.1
        }
    }

    constructor(props){
        super(props)
    }

    handleInputChange = (e) => {
        const withdrawInput = this.state.withdrawInput
        withdrawInput[e.target.name] = e.target.value
        withdrawInput['withdraw_amount'] = parseFloat(withdrawInput['withdraw_amount'])
        const tempValue = 0;
        if(!Number.isNaN(withdrawInput['withdraw_amount'])){
            var feeWd = withdrawInput['withdraw_amount'] * this.state.withdrawConf.fee;
            var totalUsdWd = withdrawInput['withdraw_amount'] - (withdrawInput['withdraw_amount'] * this.state.withdrawConf.fee);
            var totalUsdtWd = withdrawInput['withdraw_amount'] - (withdrawInput['withdraw_amount'] * this.state.withdrawConf.fee);
            withdrawInput['fee_wd'] = feeWd.toFixed(2);
            withdrawInput['total_wd'] = totalUsdWd;
            withdrawInput['total_wd_usdt'] = totalUsdtWd.toFixed(2);
        }else{
            withdrawInput['fee_wd'] = tempValue;
            withdrawInput['total_wd'] = tempValue;
            withdrawInput['total_wd_usdt'] = tempValue;
        }

        this.setState({
            withdrawInput:withdrawInput
        })
    }
    render(){
        return(
            <Modal isOpen={this.props.openModal} onClose={this.props.closeModal}>
                <ModalHeader>Crazy Rich Trading Wihtdraw</ModalHeader>
                <ModalBody>
                <form>
                    <div className="px-4 mb-2 bg-white rounded-lg shadow-md dark:bg-gray-800">

                        <Label className="mt-4">
                            <span>Amount</span>
                            <Input type="number"  onChange={this.handleInputChange} name="withdraw_amount" className="mt-1"  />
                        </Label>

                        <Label className="mt-4">
                            <span>Address</span>
                            <Input type="text" name="address" onChange={this.handleInputChange} className="mt-1"  />
                        </Label>

                        <Label className="mt-4">
                            <span>Fee Withdraw $</span>
                            <Input disabled value={this.state.withdrawInput.fee_wd} name="fee_wd" onChange={this.handleInputChange} className="mt-1" />
                        </Label>
                        <Label className="mt-4">
                            <span>Total Withdraw</span>
                            <Input disabled value={this.state.withdrawInput.total_wd} onChange={this.handleInputChange} name="total_wd" className="mt-1" />
                        </Label>
                        <Label className="mt-4">
                            <span>Total Withdraw USDT</span>
                            <Input disabled value={this.state.withdrawInput.total_wd_usdt} onChange={this.handleInputChange} className="mt-1" name="total_wd_usdt" />
                        </Label>
                    </div>
                    <ModalFooter>
                        <div className="hidden sm:block">
                            <Button layout="outline" onClick={this.props.closeModal}>
                            Cancel
                            </Button>
                        </div>
                        <div className="hidden sm:block">
                            <Button 
                            type="submit"
                                // disabled={
                                //     !this.state.isValid.investment && this.state.isValid.investment != null ? true : false
                                // }
                            >Accept</Button>
                        </div>
                        <div className="block w-full sm:hidden">
                            <Button block size="large" layout="outline" onClick={this.props.closeModal}>
                            Cancel
                            </Button>
                        </div>
                        <div className="block w-full sm:hidden">
                            <Button 
                            block size="large"
                            type="submit"
                            // disabled={
                            //     !this.state.isValid.investment && this.state.isValid.investment != null ? true : false
                            // }
                            >
                            Accept
                            </Button>
                        </div>
                    </ModalFooter>
                    </form>
                </ModalBody>
            </Modal>
        )
    }
}

export default WithdrawModal;