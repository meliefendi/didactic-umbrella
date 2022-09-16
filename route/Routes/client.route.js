var express = require('express');

var router = express.Router();

const ClientController = require('../../controller/client.controller');


router.get('/', ClientController.Get)
router.post('/', ClientController.Create)
router.put('/', ClientController.Update)
router.delete('/', ClientController.Delete)
router.patch('/', ClientController.Patch)


module.exports = router;


