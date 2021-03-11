import { ADD_SHELF, EDIT_SHELF, DELETE_SHELF, CLEAR_SHELF } from '../actions/types'

const initialState = {
    shelfList: [],
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SHELF:
            return {
                ...state,
                shelfList: state.shelfList.concat(action.shelf)
            };

        case DELETE_SHELF:
            return {
                ...state,
                shelfList: state.shelfList.filter((item) => item.id !== action.id)
            };

        case EDIT_SHELF:
            return {
                ...state,
                shelfList: state.shelfList.map((item) =>
                    item.id === action.shelf.shelfID
                        ? {
                            ...item,
                            height: action.shelf.height,
                            length: action.shelf.length,
                            level: action.shelf.level,
                            maxWeight: action.shelf.maxWeight,
                            shelfID: action.shelf.shelfID,
                            width: action.shelf.width,
                        }
                        : item
                )
            };

        case CLEAR_SHELF:
            return {
                ...state,
                shelfList: []
            };

        default:
            return state;
    }
}

export default productReducer;