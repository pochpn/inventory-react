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
                            productID: action.product.productID,
                            productName: action.product.productName,
                            recvDate: action.product.recvDate,
                            expDate: action.product.expDate,
                            level: action.product.level,
                            shelf: action.product.shelf,
                            oty: action.product.oty,
                            pic: action.product.pic,
                            type: action.product.type,
                            unit: action.product.unit,
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