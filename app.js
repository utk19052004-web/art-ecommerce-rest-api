const express = require('express');
const app = express();

app.use(express.json());

const productRoutes = require('./routes/productroute');
const userRoutes = require('./routes/userroute');
const cartRoutes = require('./routes/cartroute');
const orderRoutes = require('./routes/orderroute');

app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/cart', cartRoutes);
app.use('/orders', orderRoutes);

app.use((err, req, res, next) => {
    console.error("Unhandled Error:", err.message);
    res.status(500).json({
        success: false,
        message: "Internal Server Error"
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
