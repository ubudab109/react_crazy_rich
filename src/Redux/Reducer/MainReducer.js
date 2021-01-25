import ActionType from '../DispatchAction/index'


const initialState = {
    users:{},
    InvestmentForm:{},
    investmentSubmit: false,
}

const mainReducer = (state = initialState, action) => {
    switch(action.type){
        case ActionType.LOAD_ACCOUNT:
            if(state.investmentSubmit){
                return{
                    ...state,
                    users:{
                        ...state.users,
                        saldo_invest: state.users.saldo_invest - action.amount
                    }
                }
            }
            return{
                ...state,
                users: action.users
            }
        default:
            return state;
    }
}

export default mainReducer