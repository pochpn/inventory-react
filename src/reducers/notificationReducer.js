import { ADD_NOTIFY, CLEAR_NOTIFY, DELETE_NOTIFY, EDIT_NOTIFY } from '../actions/types'

const initialState = {
    notificationList: [],
};

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTIFY:
            return {
                ...state,
                notificationList: state.notificationList.concat(action.notification)
            };

        case DELETE_NOTIFY:
            return {
                ...state,
                notificationList: state.notificationList.filter((item) => item.id !== action.id)
            };

        case EDIT_NOTIFY:
            return {
                ...state,
                notificationList: state.notificationList.map((item) =>
                    item.id === action.notification.id
                        ? {
                            ...item,
                            notificationHead: action.notification.notificationHead,
                            notiCount: action.notification.notiCount
                        }
                        : item
                )
            };

        case CLEAR_NOTIFY:
            return {
                ...state,
                notificationList: []
            };

        default:
            return state;
    }
}

export default notificationReducer;