import axios from 'axios';
import { DEFAULT_URL } from "../DispatchAction/index";
import ActionType from '../DispatchAction/index'

export function investmentAction(id, ...formInvestment){
    return dispatch => {
        return axios.post(`${DEFAULT_URL}investment`, formInvestment)
        .then((res) => {
            return axios.put(`${DEFAULT_URL}users/${res.user_id}`)
        })
    }
}

export function dispatchInvestment(...investmentPost){
    return{
        type: ActionType.UPDATE_INVESTMENT_BALANCE,
        InvestmentForm:investmentPost,
    }
}