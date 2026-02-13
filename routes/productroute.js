const express = require('express');
const router = express.Router();
const controller = require('../controllers/productcontroller');

function checkProduct(req, res, next) {
    const { title, cost } = req.body;
    if (!title || typeof cost !== 'number') {
        return res.status(400).json({ error: "Invalid product payload" });
    }
    next();
}

router.get('/', controller.fetchProducts);
router.get('/:id', controller.fetchProduct);
router.post('/', checkProduct, controller.addProduct);
router.put('/:id', checkProduct, controller.modifyProduct);
router.delete('/:id', controller.removeProduct);

module.exports = router;