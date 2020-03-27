const express = require('express');
const router = express.Router();
const user_controller = require('../controller/controller');

router.get('/test', user_controller.test);

router.post('/create', user_controller.user_create);

router.get('/getall',user_controller.user_getall);

router.get('/:id', user_controller.user_details);

router.put('/update/:id', user_controller.user_update);

router.delete('/delete/:id', user_controller.user_delete);

module.exports = router;

