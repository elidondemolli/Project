const express = require('express');
const router = express.Router();

const { getUsers, getAllUsers, login, register, forgotPassword, resetPassword, deleteUser } = require('../controllers/user-controller')

router.get('/', getUsers);
router.get('/all', getAllUsers);
router.delete('/delete/:id', deleteUser);
router.post('/login', login);
router.post('/register', register);
router.put('/forgot-password', forgotPassword);
router.put('/reset-password/:token', resetPassword);

module.exports = router