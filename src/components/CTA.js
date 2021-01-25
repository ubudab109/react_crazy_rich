import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CopyToClipboard } from "react-copy-to-clipboard";

class CTA extends Component{
  state = {
    value: `http://crazyrich.trade/register.php?referral=${this.props.referral_code}`,
    copied: false,
  }

  onCopy = ()=>{
    this.setState({
      copied: true
    })

    alert("Copied To Clipboard")
  }
  render(){
    return(
      <CopyToClipboard text={this.state.value} onCopy={() => this.onCopy()}>

      <a
      href="#"
      className="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-green-100 bg-green-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple"
      >
        <div className="flex items-center">
          <span>Your Referral Link: <span className="text-sm font-bold" id="ref-link">{this.state.value}</span></span>
        </div>
      </a>
      </CopyToClipboard>
    )
  }
}

const mapStateToProps = state => ({
  referral_code: state.users.referral_code
})



export default connect(mapStateToProps)(CTA)
