const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getMe, getBalance, updateBalance} = require('../controllers/userController')
const {protect} = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)
router.get('/balance', protect, getBalance)
router.get('/balance', protect, updateBalance)

module.exports = router