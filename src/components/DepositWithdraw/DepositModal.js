import React, { Component } from 'react';
import { Button, HelperText, Input, Label, Modal, ModalBody, ModalHeader, ModalFooter } from '@windmill/react-ui';



class DepositModal extends Component{

    state = {
        depositInput:{},
        depositConf:{
            rate: 1.00,
            fee: 0.03
        }
    }

    constructor(props){
        super(props)
        this.handleOnChange = this.handleOnChange.bind(this)
    }
    handleOnChange = (e) => {
        const depositInput = this.state.depositInput
        depositInput[e.target.name] = e.target.value
        depositInput['deposit_amount'] = parseFloat(depositInput['deposit_amount'])
        var tempValue = 0
        if(!Number.isNaN(depositInput['deposit_amount'])){
            var depositUsdt = depositInput['deposit_amount'] * this.state.depositConf.rate
            var feeUsdt = depositInput['deposit_amount'] * this.state.depositConf.fee

            depositInput['deposit_usdt'] = parseFloat(depositUsdt).toFixed(2)
            depositInput['fee_usdt'] = parseFloat(feeUsdt).toFixed(2)

            var total = parseFloat(depositInput['deposit_usdt']) + parseFloat(depositInput['fee_usdt'])

            depositInput['total_usdt'] = total.toFixed(2)
        }else{
            depositInput["deposit_usdt"] = tempValue
            depositInput['fee_usdt'] = ""
            depositInput['total_usdt'] = ""
        }

        this.setState({
            depositInput:depositInput
        })
    }

    onSubmitDeposit = (e) => {
        e.preventDefault()
        console.log(parseFloat(this.state.depositInput.deposit_amount))
        console.log(parseFloat(this.state.depositInput.deposit_usdt))
        console.log(parseFloat(this.state.depositInput.fee_usdt))
        console.log(parseFloat(this.state.depositInput.total_usdt))
    }


    render(){
        return(
            <Modal isOpen={this.props.openModal} onClose={this.props.closeModal}>
                <ModalHeader className="text-center">Crazy Rich Trading Deposit
                </ModalHeader>
                <span className="mt-4 mb-4 text-sm font-semibold text-gray-700 dark:text-gray-300 text-center">Rate USDT: 1.00</span>

                <ModalBody>
                <form onSubmit={this.onSubmitDeposit}>
                    <div className="px-4 mb-2 bg-white rounded-lg shadow-md dark:bg-gray-800">

                        <Label className="mt-4">
                            <span>Deposit Amount USD</span>
                            <Input type="number" name="deposit_amount" onChange={this.handleOnChange} className="mt-1"  />
                        </Label>

                        <Label className="mt-4">
                            <span>Deposit Amount USDT</span>
                            <Input disabled value={this.state.depositInput.deposit_usdt} name="deposit_usdt" onChange={this.handleOnChange} className="mt-1"  />
                        </Label>

                        <Label className="mt-4">
                            <span>Deposit Fee Amount USDT</span>
                            <Input disabled value={this.state.depositInput.fee_usdt} onChange={this.handleOnChange} name="fee_usdt" className="mt-1" />
                        </Label>
                        <Label className="mt-4">
                            <span>Total Deposit Amount USDT</span>
                            <Input disabled value={this.state.depositInput.total_usdt} onChange={this.handleOnChange} name="total_usdt" className="mt-1" />
                        </Label>
                        <Label className="mt-4">
                            <span>Address Admin TRC-20</span>
                            <Input disabled value="TG3jM1sZ6HFk1VUjwEretcAgQp4UDHYGuo" className="mt-1" />
                        </Label>
                        <Label className="mt-4">
                            <span>Please Input TXID</span>
                            <Input type="text" name="tx_id" onChange={this.handleOnChange} className="mt-1" />
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

export default DepositModal;