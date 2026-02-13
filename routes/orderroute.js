const express = require('express');
const router = express.Router();
const controller = require('../controllers/ordercontroller');

function checkOrder(req, res, next) {
    const { customer, amount } = req.body;
    
    if (!customer || typeof amount !== 'number') {
        return res.status(400).json({ error: "Invalid order payload" });
    }
    
    next();
}

router.get('/', controller.getOrders);
router.get('/:id', controller.getOrder);
router.post('/', checkOrder, controller.createOrder);
router.put('/:id', checkOrder, controller.updateOrder);
router.delete('/:id', controller.deleteOrder);

module.exports = router;