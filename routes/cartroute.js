const express = require('express');
const router = express.Router();
const controller = require('../controllers/cartcontroller');

function checkCart(req, res, next) {
    const { productId, qty } = req.body;
    if (!productId || typeof qty !== 'number') {
        return res.status(400).json({ error: "Invalid cart payload" });
    }
    next();
}

router.get('/', controller.viewCart);
router.get('/:id', controller.viewCartItem);
router.post('/', checkCart, controller.addCartEntry);
router.put('/:id', checkCart, controller.updateCartEntry);
router.delete('/:id', controller.removeCartEntry);

module.exports = router;