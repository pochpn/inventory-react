import { ADD_NOTIFY, EDIT_NOTIFY, DELETE_NOTIFY, CLEAR_NOTIFY } from './types'

export const addNotification = (notification) => ({
    type: ADD_NOTIFY,
    notification: notification,
});

export const deleteNotification = (id) => ({
    type: DELETE_NOTIFY,
    id: id,
});

export const editNotification = (notifiction) => ({
    type: EDIT_NOTIFY,
    notifiction: notifiction,
});

export const clearNotification = () => ({
    type: CLEAR_NOTIFY,
})