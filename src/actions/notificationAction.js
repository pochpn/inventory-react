import { ADD_NOTIFY, EDIT_NOTIFY, DELETE_NOTIFY, CLEAR_NOTIFY } from './types'

export const addNotify = (notification) => ({
    type: ADD_NOTIFY,
    notification: notification,
});

export const deleteNotify = (id) => ({
    type: DELETE_NOTIFY,
    id: id,
});

export const editNotify = (notifiction) => ({
    type: EDIT_NOTIFY,
    notifiction: notifiction,
});

export const clearNotify = () => ({
    type: CLEAR_NOTIFY,
})