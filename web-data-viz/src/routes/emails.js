var express = require("express");
var router = express.Router();

var emailsController = require("../controllers/emailsController");


router.get("/listar", function (req, res) {
  emailsController.listar(req, res);
});

module.exports = router;