import { ADD_BILL, CLEAR_BILL, DELETE_BILL, EDIT_BILL } from '../actions/types'

const initialState = {
    billList: [],
};

const billReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BILL:
            return {
                ...state,
                billList: state.billList.concat(action.product)
            };

        case DELETE_BILL:
            return {
                ...state,
                billList: state.billList.filter((item) => item.id !== action.id)
            };

        case EDIT_BILL:
            return {
                ...state,
                billList: state.billList.map((item) =>
                    item.id === action.product.id
                        ? {
                            ...item,
                            
                        }
                        : item
                )
            };

        case CLEAR_BILL:
            return {
                ...state,
                billList: []
            };

        default:
            return state;
    }
}

export default billReducer;