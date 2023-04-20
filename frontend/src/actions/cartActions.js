import axios from 'axios'
import {
    ADD_TO_CART,
    REMOVE_ITEM_CART,
    SAVE_SHIPPING_INFO,
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_FAIL,
    MY_CARTS_SUCCESS,
    MY_CARTS_REQUEST,
    // MY_CARTS_FAIL,
    REMOVE_ITEM_CART_SUCCESS,
    CLEAR_ITEM_CART,
    CLEAR_ITEM_CART_SUCCESS
} from '../constants/cartConstants'
// import { REGISTER_USER_FAIL, REGISTER_USER_SUCCESS } from '../constants/userConstants'

export const myCarts = () => async(dispatch) => {
    dispatch({ type: MY_CARTS_REQUEST })
    const { data } = await axios.get(`/api/v1/cart`)
    dispatch({
        type: MY_CARTS_SUCCESS,
        payload: data
    })
}

export const addItemToCart = (id, quantity) => async(dispatch, getState) => {

        try {
            dispatch({ type: ADD_TO_CART })
            const config = {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                // console.log(quantity)
            const { data } = await axios.post(`/api/v1/cart/${id}`, { quantity: quantity }, config)
            console.log(data)
            dispatch({
                type: ADD_TO_CART_SUCCESS,
                payload: data
            })
        } catch (error) {
            dispatch({
                type: ADD_TO_CART_FAIL,
                payload: error.response.data.message
            })
        }
    }
    //     dispatch({
    //         type: ADD_TO_CART,
    //         payload: {
    //             product: data.product._id,
    //             name: data.product.name,
    //             price: data.product.price,
    //             image: data.product.images[0].url,
    //             stock: data.product.stock,
    //             quantity
    //         }
    //     })

//     localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
// }

export const removeItemFromCart = (id) => async(dispatch, getState) => {
    dispatch({
        type: REMOVE_ITEM_CART
    })
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const { data } = await axios.delete(`/api/v1/cart/${id}`, config)
    dispatch({
        type: REMOVE_ITEM_CART_SUCCESS,
        payload: data
    })
}
export const clearCart = () => async(dispatch) => {
    dispatch({
        type: CLEAR_ITEM_CART
    })
    const { data } = await axios.delete(`/api/v1/cart/all`)
    dispatch({
        type: CLEAR_ITEM_CART_SUCCESS,
        payload: data
    })
}

export const saveShippingInfo = (data) => async(dispatch) => {

    dispatch({
        type: SAVE_SHIPPING_INFO,
        payload: data
    })



}