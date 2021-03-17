import { ADD_PICKORDER, CLEAR_PICKORDER, DELETE_PICKORDER } from '../actions/types'

const initialState = {
    pickOrderList: [],
};

const pickOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PICKORDER:
            return {
                ...state,
                pickOrderList: state.pickOrderList.concat(action.product)
            };

        case DELETE_PICKORDER:
            return {
                ...state,
                pickOrderList: state.pickOrderList.filter((item) => item.id !== action.id)
            };

        case CLEAR_PICKORDER:
            return {
                ...state,
                pickOrderList: []
            };

        default:
            return state;
    }
}

export default pickOrderReducer;