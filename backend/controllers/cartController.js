const catchAsyncErrors = require('../middlewares/catchAsyncErrors')
const Cart = require('../models/carts');
const Product = require('../models/product')
const ErrorHandler = require('../utils/errorHandler');
//create Cart => /api/v1/createcart => cart của người dùng sẽ được khoier tạo khi đăng kí
exports.createCart = catchAsyncErrors(async(req, res) => {
    const create = await Cart.create({
        user: req.user.id,
        cartItem: []
    })
    res.status(200).json({
        success: true,
        create
    })
})
exports.getCart = catchAsyncErrors(async(req, res, next) => {
    let cart = await Cart.findOne({ user: req.user.id }).exec()
    if (!cart) {
        return next(new ErrorHandler('Không tìm thấy cart'))
    }
    res.status(200).json({
        success: true,
        cart
    })
})
exports.addItemToCart = catchAsyncErrors(async(req, res, nex) => {
    const cart = await Cart.findOne({ user: req.user.id })
    const product = await Product.findById(req.params.id)
    const existProduct = await cart.cartItem.find(i => i.product.toString() === req.params.id)
    if (existProduct) {
        existProduct.quantity = req.body.quantity
    } else {
        const newItem = {
            name: product.name,
            quantity: parseInt(req.body.quantity),
            image: product.images[0].url,
            price: product.price,
            product: product.id
        }
        cart.cartItem.push(newItem)
    }
    console.log(cart)
    await cart.save()
    res.status(200).json({
        success: true,
        cart
    })
})
exports.removeItemFromCart = catchAsyncErrors(async(req, res, next) => {
    let cart = await Cart.findOne({ user: req.user.id })
    console.log(typeof req.params.id);
    const newCartItems = cart.cartItem.filter(i => i.product.toString() !== req.params.id)
    cart.cartItem = newCartItems
    await cart.save()
    res.status(200).json({
        success: true,
        cart
    })
})
exports.clearCart = catchAsyncErrors(async(req, res) => {
    let cart = await Cart.findOne({ user: req.user.id })
    cart.cartItem = []
    await cart.save()
    res.status(200).json({
        success: true,
        cart
    })
})