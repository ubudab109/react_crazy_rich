import axios from 'axios';
import {DEFAULT_URL} from '../../GlobalApi/GlobalApi'
import ActionType from '../DispatchAction/index'

export function loadAccount(){
    return dispatch => {
        return axios.get(`${DEFAULT_URL}users`)
        .then(res => {
            dispatch(fetchAccountInfo(res.data[1]))
        })
    }
}

export function fetchAccountInfo(users){
    return{
        type: ActionType.LOAD_ACCOUNT,
        users:users
    }
}

export function updateBalanceDispatch(amount) {
    return{
        type: ActionType.UPDATE_INVESTMENT_BALANCE,
        investmentSubmit: true,
        amount: amount
    }
}

// export function updateBalance(user_id, users, amount) {
//     return dispatch => {
//         return axios.put(`${DEFAULT_URL}users/${user_id}`, {
//             ...users,
//             saldo_invest: users.saldo_invest - amount
//         })
//         .then((res) => {
//             dispatch(updateBalanceDispatch(res.data.amount))
//         })
//     }
// }