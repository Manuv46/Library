const { Router } = require('express');
const controller = require('./controller')

const router = Router()

router.get('/', controller.getUsers);
router.get('/:id', controller.getUsersById);
router.post('/newuser', controller.addUser);

module.exports = router;