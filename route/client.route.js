var express = require('express');

var router = express.Router();

const ClientController = require('../controller/client.controller');



router.get("/", ClientController.Get);

//  router.get("/ById", ClientController.GetById);

// router.post("/SaveShema", ClientController.SaveShema);

// router.post("/Update", ClientController.UpdateId);

// router.post("/DeleteClient", ClientController.DeleteId);


module.exports = router;


