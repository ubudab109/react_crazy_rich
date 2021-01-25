import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadAccount } from '../../Redux/Actions/AccountInfoAction';


class AccountInfo extends Component{
    componentDidMount(){
        // console.log(this)
        this.props.fetchAccount()
    }
    render(){
        return(
            <div id="empty-cover-art" className="py-5 h-28 rounded w-56 text-black dark:text-white text-center opacity-50 font-bold">
                <center>
                <h2 className="font-bold">{this.props.username}</h2>
                </center>
                <div className="">
                    <span className="font-mono text-gray-800 dark:text-gray-100 rounded">Active Balance : {`$${this.props.balance}`}</span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.users,
    balance: state.users.balance,
    username: state.users.username
})



const mapDispatchToProps = (dispatch) => ({
    fetchAccount: () => {
        dispatch(loadAccount());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AccountInfo);