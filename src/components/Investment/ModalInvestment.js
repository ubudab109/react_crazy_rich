import { Button, HelperText, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from '@windmill/react-ui';
import React, { Component } from 'react';

class InvestmentModal extends Component{

    state = {
        input:{},
        isValid:{}
    }

    constructor(props){
        super(props)
        this.handleInvestmentInput = this.handleInvestmentInput.bind(this)
    }

    handleInvestmentInput(event){
        let input = this.state.input;
        input["investment"] = event.target.value;
        this.setState({
            input: input
        }, () => {
            let valid = {}
            if(input["investment"] < this.props.invest){
                valid["investment"] = false
            }else{
                valid["investment"] = true
            }

            this.setState({
                isValid: valid
            }, ()=> console.log(this.state.isValid.investment))
        })
        
    }

    render(){
        return (
            <Modal isOpen={this.props.openModal} onClose={this.props.closeModal}>
                <ModalHeader>Modal header</ModalHeader>
                <ModalBody>
                    <form>
                        <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                            <Label>
                                <span>Minimum Invest</span>
                                <Input className="mt-1" onKeyUp={this.handleInvestmentInput} name="investment" defaultValue={this.props.invest} type="number" />
                               {
                                   this.state.isValid.investment == null ? null : 
                                   <HelperText valid={this.state.isValid.investment}>{this.state.isValid.investment ? "" : `Investment Minimum is $${this.props.invest}` }</HelperText> 
                               }
                            </Label>

                            <Label className="mt-4">
                                <span>Profit %</span>
                                <Input disabled value={this.props.desc1} className="mt-1"  />
                            </Label>

                            <Label className="mt-4">
                                <span>Days Contract</span>
                                <Input disabled value={this.props.desc2} className="mt-1" />
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
                                    disabled={
                                        !this.state.isValid.investment && this.state.isValid.investment != null ? true : false
                                    }
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
                                disabled={
                                    !this.state.isValid.investment && this.state.isValid.investment != null ? true : false
                                }
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

export default InvestmentModal;