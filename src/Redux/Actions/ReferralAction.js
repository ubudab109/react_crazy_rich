import axios from 'axios';
import ActionType  from "../DispatchAction/index";
import {DEFAULT_URL} from '../../GlobalApi/GlobalApi'

// export function fetchReferral(){
//     return dispatch => {
//         return axios.get(`${DEFAULT_URL}referral`)
//         .then((res) => {
//             dispatch(fetchReferralDispatch(res.data))
//         })
//     } 
// }

export const fetchReferral = async () => {
    const result = await axios.get(`${DEFAULT_URL}referral`)
    .then(({data})=> {
        return data;
    })

    return result;
}

export function fetchReferralDispatch(userReferral){
    return{
        type: ActionType.LOAD_REFERRAL,
        UserReferral: userReferral
    }
}

export function addReferral(data){
    return axios.post(`${DEFAULT_URL}referral`, {
        id: data.id,
        referrer_id: data.referral_code,
        full_name: data.full_name,
        email: data.email,
        password:data.password,
        date: data.date
    })
}

