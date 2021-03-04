import { ADD_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT, CLEAR_PRODUCT } from './types'

export const addProduct = (product) => ({
    type: ADD_PRODUCT,
    product: product,
});

export const deleteAccount = (id) => ({
    type: DELETE_PRODUCT,
    id: id,
});

export const editAccount = (product) => ({
    type: EDIT_PRODUCT,
    product: product,
});

export const clearAccount = () => ({
    type: CLEAR_PRODUCT,
})