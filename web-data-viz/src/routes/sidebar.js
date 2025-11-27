var express = require("express");
 var router = express.Router();

 var sidebarController = require("../controllers/sidebarController.js");

 router.post("/buscarAvatar/:idUsuario", function (req, res) {
    sidebarController.buscarAvatar(req, res);
 });
 
 module.exports = router;