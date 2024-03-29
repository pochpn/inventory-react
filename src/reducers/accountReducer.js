import { ADD_ACCOUNT, CLEAR_ACCOUNT, DELETE_ACCOUNT, EDIT_ACCOUNT } from '../actions/types'

const initialState = {
    accountList: [],
};

const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ACCOUNT:
            return {
                ...state,
                accountList: state.accountList.concat(action.account)
            };

        case DELETE_ACCOUNT:
            return {
                ...state,
                accountList: state.accountList.filter((item) => item.id !== action.id)
            };

        case EDIT_ACCOUNT:
            return {
                ...state,
                accountList: state.accountList.map((item) =>
                    item.id === action.account.id
                        ? {
                            ...item,
                            address: action.account.address,
                            firstnameEN: action.account.firstnameEN,
                            firstnameTH: action.account.firstnameTH,
                            lastnameEN: action.account.lastnameEN,
                            lastnameTH: action.account.lastnameTH,
                            pass: action.account.pass,
                            tel: action.account.tel,
                            pic: action.account.pic,
                        }
                        : item
                )
            };

        case CLEAR_ACCOUNT:
            return {
                ...state,
                accountList: []
            };

        default:
            return state;
    }
}

export default accountReducer;