import { ADD_PRODUCT_PROFILE, EDIT_PRODUCT_PROFILE, DELETE_PRODUCT_PROFILE, CLEAR_PRODUCT_PROFILE } from '../actions/types'

const initialState = {
    productProfileList: [],
};

const productProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_PROFILE:
            return {
                ...state,
                productProfileList: state.productProfileList.concat(action.product)
            };

        case DELETE_PRODUCT_PROFILE:
            return {
                ...state,
                productProfileList: state.productProfileList.filter((item) => item.id !== action.id)
            };

        case EDIT_PRODUCT_PROFILE:
            return {
                ...state,
                productProfileList: state.productProfileList.map((item) =>
                    item.id === action.product.id
                        ? {
                            ...item,
                            productID: action.product.productID,
                            productName: action.product.productName,
                            pic: action.product.pic,
                            shelf: action.product.shelf,
                            type: action.product.type,
                            unit: action.product.unit,
                        }
                        : item
                )
            };

        case CLEAR_PRODUCT_PROFILE:
            return {
                ...state,
                productProfileList: []
            };

        default:
            return state;
    }
}

export default productProfileReducer;