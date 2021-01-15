import { Input, HelperText, Label, Button} from '@windmill/react-ui'
import React, { Component } from 'react';
import CTA from '../components/CTA';
import SectionTitle from '../components/Typography/SectionTitle';

class ChangePassword extends Component{
    state = {
        oldPassword: "password",
        input: {},
        valid:{},
    }
    
    constructor(props){
        super(props);
        this.handleInputPassword = this.handleInputPassword.bind(this);
        // this.validation = this.validation.bind();
    }

    handleInputPassword(event){
        let input = this.state.input;
        input[event.target.name] = event.target.value;

        this.setState({
            input: input
        }, () => {
            let oldPassword = this.state.oldPassword;
            let valid = {};

            if(!input["oldInput"] || input["oldInput"] != oldPassword){
                valid["oldInput"] = false;
            }else{
                valid["oldInput"] = true;
            }

            if(!input['newPassword'] || input['newPassword'].length < 8){
                valid["newPassword"] = false;
            }else{
                valid["newPassword"] = true
            }

            if(!input["rePassword"] || input["rePassword"] != input["newPassword"]){
                valid["rePassword"] = false;
            }else{
                valid["rePassword"] = true;
            }

            this.setState({
                valid: valid
            })
        })
    }

    
    render(){
        return(
            <>
            <br/>
            <CTA />
            <SectionTitle>Change Password</SectionTitle>
            <form>
            <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <Label>
                <span>Old Password</span>
                <Input 
                    className="mt-1" 
                    type="password" 
                    name="oldInput" 
                    onKeyUp={this.handleInputPassword} 
                    id="old-password"  
                    autoComplete="off"
                />
                {
                    this.state.valid.oldInput == null ? null : 
                    <HelperText valid={this.state.valid.oldInput}>{this.state.valid.oldInput ? "Old Password Match" : "Old Password Doesn't Match" }.</HelperText> 
                }
                
                </Label>

                <Label className="mt-4">
                <span>New Password</span>
                <Input className="mt-1" name="newPassword" type="password" onKeyUp={this.handleInputPassword} autoComplete="off"/>
                {
                    this.state.valid.newPassword == null ? null : 
                    <HelperText valid={this.state.valid.newPassword}>{!this.state.valid.newPassword ? "Your password must be at least 8 characters long" : null }</HelperText> 
                }
                </Label>

                <Label className="mt-4">
                <span>Retype Password</span>
                <Input className="mt-1" name="rePassword" onKeyUp={this.handleInputPassword} type="password" autoComplete="off" />
                {
                    this.state.valid.rePassword == null ? null : 
                    <HelperText valid={this.state.valid.rePassword}>{!this.state.valid.rePassword ? "Your password must same with Your new password" : null }</HelperText> 
                }
                </Label>
                
                     
                    <div className="mt-4">
                        <Button
                        disabled={
                            !this.state.valid.oldInput || !this.state.valid.newPassword || !this.state.valid.rePassword ? true : false
                        }
                        >Submit</Button>
                    </div>
                
            </div>
            
            </form>
        </>
        )
    }
}



export default ChangePassword