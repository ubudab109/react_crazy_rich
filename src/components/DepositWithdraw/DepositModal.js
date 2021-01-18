import React, { Component } from 'react';
import { Button, HelperText, Input, Label, Modal, ModalBody, ModalHeader, ModalFooter } from '@windmill/react-ui';



class DepositModal extends Component{



    render(){
        return(
            <Modal isOpen={this.props.openModal} onClose={this.props.closeModal}>
                <ModalHeader className="text-center">Crazy Rich Trading Deposit</ModalHeader>
                <ModalBody>
                <form>
                    <div className="px-4 mb-2 bg-white rounded-lg shadow-md dark:bg-gray-800 ">
                        {/* <Label>
                            <span>Minimum Invest</span>
                            <Input className="mt-1" onKeyUp={this.handleInvestmentInput} name="investment" defaultValue={this.props.invest} type="number" />
                        {
                            this.state.isValid.investment == null ? null : 
                            <HelperText valid={this.state.isValid.investment}>{this.state.isValid.investment ? "" : `Investment Minimum is $${this.props.invest}` }</HelperText> 
                        }
                        </Label> */}

                        <Label className="mt-4">
                            <span>Deposit Amount USD</span>
                            <Input type="number" className="mt-1"  />
                        </Label>

                        <Label className="mt-4">
                            <span>Deposit Amount USDT</span>
                            <Input disabled value="1.00" className="mt-1"  />
                        </Label>

                        <Label className="mt-4">
                            <span>Deposit Fee Amount USDT</span>
                            <Input disabled value="0.03" className="mt-1" />
                        </Label>
                        <Label className="mt-4">
                            <span>Total Deposit Amoun USDT</span>
                            <Input disabled value="1.03" className="mt-1" />
                        </Label>
                        <Label className="mt-4">
                            <span>Address Admin TRC-20</span>
                            <Input disabled value="TG3jM1sZ6HFk1VUjwEretcAgQp4UDHYGuo" className="mt-1" />
                        </Label>
                        <Label className="mt-4">
                            <span>Please Input TXID</span>
                            <Input type="text" className="mt-1" />
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