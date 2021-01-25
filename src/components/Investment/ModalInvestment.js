import { Button, HelperText, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from '@windmill/react-ui';
import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DEFAULT_URL } from '../../GlobalApi/GlobalApi';
import { loadAccount} from '../../Redux/Actions/AccountInfoAction';

class InvestmentModal extends Component{

    state = {
        input:{
            id: "",
            investment_id: parseInt(this.props.investment_id),
            user_id: "",
            amount: ""
        },
        users:{
            saldo_invest: ""
        },
        isValid:{},
        isEnough:{},
    }

    constructor(props){
        super(props)
        this.handleInvestmentInput = this.handleInvestmentInput.bind(this)
        this.submitForm = this.submitForm.bind(this);
    }

    handleInvestmentInput(event){
        let valid = {}
        let isEnough = {}
        if(event.target.value < this.props.invest || event.target.value === NaN){
            valid["investment"] = false;
        }else{
            valid["investment"] = true;
            if(event.target.value > this.props.saldo_invest){
                isEnough["valid"] = false;
            }else{
                isEnough["valid"] = true;
            }
        }
        this.setState({
            isValid: valid
        })
        this.setState({
            isEnough: isEnough
        })
    }

    handleInputChange = (e) =>{
        let inputInvestment = {...this.state.input};

        inputInvestment['id'] = new Date().getTime();
        inputInvestment['user_id'] = parseInt(this.props.user_id)
        inputInvestment[e.target.name] = parseInt(e.target.value);

        this.setState({
            input: inputInvestment
        })
    }
    submitForm = (e) =>{
        e.preventDefault();
        axios.post(`${DEFAULT_URL}investment`, this.state.input)
        .then((res) => {
            axios.put(`${DEFAULT_URL}users/${res.data.user_id}`, {
                ...this.props.users,
                saldo_invest: this.props.users.saldo_invest - res.data.amount
            }).then((res) => {
                this.props.fetchBalance()

            })
            this.setState({
                ...this.state,
                input:{
                    ...this.state.input,
                    amount: ""
                }
            })
        })
        
    };

    getUser = () => {
        this.props.fetchBalance()
    }

    componentDidMount(){
        this.getUser();
    }


    render(){
        return (
            <Modal isOpen={this.props.openModal} onClose={this.props.closeModal}>
                <ModalHeader className="text-center">Crazy Rich Trading</ModalHeader>
                <ModalBody>
                    <form onSubmit={this.submitForm}>
                        <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                            <Label>
                                <span>Minimum Invest</span>
                                <Input className="mt-1" onKeyUp={this.handleInvestmentInput} name="amount" type="number" aria-required={true} value={this.state.input.amount} onChange={this.handleInputChange} placeholder={this.props.invest}/>
                               {
                                   this.state.isValid.investment == null ? null : 
                                   <HelperText valid={this.state.isValid.investment}>{this.state.isValid.investment ? "" : `Investment Minimum is $${this.props.invest}` }</HelperText> 
                               }
                               {
                                   this.state.isEnough.valid == null ? null:
                                   <HelperText
                                   valid={this.state.isEnough.valid}
                                   >
                                       {
                                           this.state.isEnough.valid ? "" : `Your Balance is Not Enough`
                                       }
                                   </HelperText>
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
                                    type="submit"
                                    disabled={
                                        !this.state.isValid.investment && this.state.isValid.investment != null || !this.state.isEnough.valid && this.state.isEnough.valid != null || this.state.input.amount == "" ? true : false
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
                                type="submit"
                                block size="large"
                                disabled={
                                    !this.state.isValid.investment && this.state.isValid.investment != null || !this.state.isEnough.valid && this.state.isEnough.valid != null || this.state.input.amount == "" ? true : false
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

const mapStateToProps = state => ({
    users: state.users,
    user_id: state.users.id,
    saldo_invest: state.users.saldo_invest
});

const mapDispatchToProps = dispatch => ({
    fetchBalance: () => {
        dispatch(loadAccount())
    },
    // updateBalance: (amount) => {
    //     dispatch(updateBalanceDispatch(amount))
    // }
})



export default connect(mapStateToProps, mapDispatchToProps)(InvestmentModal);