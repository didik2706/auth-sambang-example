const express = require('express');
const router = express.Router();

// Controller
const auth = require('../controller/auth');

router.post('/register', auth.register);
router.post('/login', auth.login);

module.exports = router;
