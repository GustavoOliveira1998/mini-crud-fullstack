const express = require('express');
const UserController = require('../controllers/user.controller');

const router = express.Router();

router.get('/users', UserController.list);
router.post('/users', UserController.create);
router.put('/users/:id', UserController.update);
router.delete('/users/:id', UserController.delete);

module.exports = router;