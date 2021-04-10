import { ADD_PRODUCT, CLEAR_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT } from '../actions/types'

const initialState = {
    productList: [],
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                productList: state.productList.concat(action.product)
            };

        case DELETE_PRODUCT:
            return {
                ...state,
                productList: state.productList.filter((item) => item.id !== action.id)
            };

        case EDIT_PRODUCT:
            return {
                ...state,
                productList: state.productList.map((item) =>
                    item.id === action.product.id
                        ? {
                            ...item,
                            oty: action.product.oty,
                            level: action.product.level,
                            costPunit: action.product.costPunit,
                        }
                        : item
                )
            };

        case CLEAR_PRODUCT:
            return {
                ...state,
                productList: []
            };

        default:
            return state;
    }
}

export default productReducer;