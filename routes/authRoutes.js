const express = require('express');
const router = express.Router();
const { login, accesoProtegido } = require('../controllers/authController');
const { autenticarToken } = require('../middlewares/authMiddleware');

router.post('/login', login);
router.get('/protegido', autenticarToken, accesoProtegido);

module.exports = router;
