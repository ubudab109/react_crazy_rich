import { Label, Input, HelperText, Button } from '@windmill/react-ui';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReferral } from '../../Redux/Actions/ReferralAction';


const today = new Date();
const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
class ReferralFormComp extends Component{
    
    state = {
        inputRef:{
            id: new Date().getTime(),
            referral_code: this.props.referral_code,
            full_name: "",
            email: "",
            password:"",
            re_password:"",
            date: date
        },
        valid:{},
    }

    constructor(props){
        super(props)
        this.handleInputKeyUp = this.handleInputKeyUp.bind(this)
    }

    handleInputKeyUp(event){
        let valid = {}
        let input = this.state.inputRef
        input[event.target.name] = event.target.value;

        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
     
            
        if (!pattern.test(input["email"])) {
            valid["valid_email"] = false;
        }else{
            valid["valid_email"] = true;
        }

        if(input["password"].length < 8){
            valid["valid_password"] = false
        }else{
            valid["valid_password"] = true
        }

        if(input["re_password"] !== input["password"]){
            valid["re_password"] = false
        }else{
            valid["re_password"] = true
        }

        this.setState({
            valid: valid
        })
    }

    handleInputChange = (event) => {
        let inputAddMember = {...this.state.inputRef}
        inputAddMember[event.target.name] = event.target.value;

        this.setState({
            inputRef: inputAddMember
        })
    }

    submitReferral = (e) => {
        e.preventDefault();
        addReferral(this.state.inputRef)
        this.setState({
            inputRef:{
                ...this.state.inputRef,
                full_name: "",
                email: "",
                password:"",
                re_password:"",
                
            }
        })
    }

    render(){
        return(
            <form onSubmit={this.submitReferral}>
                <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <Label>
                    <span>Referrer ID</span>
                    <Input className="mt-1" value={this.props.referral_code}  disabled placeholder="Jane Doe" />
                    </Label>

                    <Label className="mt-4">
                        <span>Full Name</span>
                        <Input className="mt-1" value={this.state.inputRef.full_name} type="text" placeholder="Jane Doe" onChange={this.handleInputChange} name="full_name" />
                    </Label>

                    <Label className="mt-4">
                        <span>Email</span>
                        <Input className="mt-1" value={this.state.inputRef.email} onChange={this.handleInputChange} onKeyUp={this.handleInputKeyUp} type="email" placeholder="example@example.com" name="email" />
                        {
                            this.state.valid.valid_email == null ? null:
                            <HelperText valid={this.state.valid.valid_email}>
                                {
                                    this.state.valid.valid_email ? "" : "Please Enter Valid Email"
                                }
                            </HelperText>
                        }
                    </Label>

                    <Label className="mt-4">
                        <span>Password</span>
                        <Input className="mt-1" value={this.state.inputRef.password} onChange={this.handleInputChange} onKeyUp={this.handleInputKeyUp} autoComplete="off" type="password" name="password" />
                        {
                            this.state.valid.valid_password == null ? null:
                            <HelperText valid={this.state.valid.valid_password}>
                                {
                                    this.state.valid.valid_password ? "" : "Your password must be at least 8 characters long"
                                }
                            </HelperText>
                        }
                    </Label>

                    <Label className="mt-4">
                        <span>Re-Password</span>
                        <Input className="mt-1" value={this.state.inputRef.re_password} onChange={this.handleInputChange} onKeyUp={this.handleInputKeyUp} autoComplete="off" type="password" name="re_password" />
                        {
                            this.state.valid.re_password == null ? null:
                            <HelperText valid={this.state.valid.re_password}>
                                {
                                    this.state.valid.re_password ? "" : "Your password must same with Your new password"
                                }
                            </HelperText>
                        }
                    </Label>

                    <Label className="mt-6" check>
                    <Input type="checkbox" />
                    <span className="ml-2">
                        I agree to the <span className="underline">privacy policy</span>
                    </span>
                    </Label>
                    <div className="m-2 text-right">
                        <Button type="submit"
                        disabled={
                            this.state.inputRef.full_name == "" || this.state.inputRef.email == "" || this.state.inputRef.password == "" || this.state.inputRef.re_password == "" || !this.state.valid.valid_email || !this.state.valid.valid_password || !this.state.valid.re_password ? true : false
                        }
                        size="large">Accept</Button>
                    </div>
                </div>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    referral_code: state.users.referral_code
})

export default connect(mapStateToProps)(ReferralFormComp);