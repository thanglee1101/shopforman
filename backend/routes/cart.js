const express = require('express')
const router = express.Router();

const {
    getCart,
    addItemToCart,
    removeItemFromCart,
    createCart,
    clearCart
} = require('../controllers/cartController')

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth')

router.route('/cart/:id').post(isAuthenticatedUser, addItemToCart);
router.route('/createcart').post(isAuthenticatedUser, createCart);
router.route('/cart/all').delete(isAuthenticatedUser, clearCart);
router.route('/cart').get(isAuthenticatedUser, getCart);
router.route('/cart/:id').delete(isAuthenticatedUser, removeItemFromCart);





module.exports = router;