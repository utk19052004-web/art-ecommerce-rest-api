const express = require('express');
const router = express.Router();
const controller = require('../controllers/usercontroller');

function checkUser(req, res, next) {
    const { fullName, emailId } = req.body;
    if (!fullName || !emailId) {
        return res.status(400).json({ error: "Invalid user data" });
    }
    next();
}

router.get('/', controller.getUsers);
router.post('/', checkUser, controller.createUser);
router.delete('/:id', controller.deleteUser);

module.exports = router;