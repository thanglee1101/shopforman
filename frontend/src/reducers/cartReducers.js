import {
    ADD_TO_CART,
    REMOVE_ITEM_CART,
    SAVE_SHIPPING_INFO,
    MY_CARTS_REQUEST,
    MY_CARTS_SUCCESS,
    MY_CARTS_FAIL,
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_FAIL,
    REMOVE_ITEM_CART_SUCCESS,
    CLEAR_ITEM_CART,
    CLEAR_ITEM_CART_SUCCESS
} from '../constants/cartConstants'

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case MY_CARTS_REQUEST:
            return {
                loading: true,
                cartItems: []
            }
        case MY_CARTS_SUCCESS:
            return {
                loading: false,
                ...state,
                cartItems: action.payload.cart.cartItem
            }
        case MY_CARTS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case ADD_TO_CART:
            return {
                ...state,
                loading: true

            }
        case ADD_TO_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                cartItems: action.payload.cart.cartItem
            }
        case ADD_TO_CART_FAIL:
            return {
                ...state,
                error: action.payload
            }
            // const item = action.payload;

            // const isItemExist = state.cartItems.find(i => i.product === item.product)

            // if (isItemExist) {
            //     return {
            //         ...state,
            //         cartItems: state.cartItems.map(i => i.product === isItemExist.product ? item : i)
            //     }
            // } else {
            //     return {
            //         ...state,
            //         cartItems: [...state.cartItems, item]
            //     }
            // }

        case REMOVE_ITEM_CART:
            return {
                ...state,
                loading: true
            }
        case REMOVE_ITEM_CART_SUCCESS:
            return {
                ...state,
                cartItems: action.payload.cart.cartItem
            }
        case CLEAR_ITEM_CART:
            return {
                ...state,
            }
        case CLEAR_ITEM_CART_SUCCESS:
            return {
                ...state,
                cartItems: []
            }
        case SAVE_SHIPPING_INFO:
            return {
                ...state,
                shippingInfo: action.payload
            }


        default:
            return state
    }
}