var express = require("express");
 var router = express.Router();

 var sidebarController = require("../controllers/sidebarController.js");

 router.post("/buscarAvatar/:idUsuario", function (req, res) {
    sidebarController.buscarAvatar(req, res);
 });

  router.post("/buscarIvy/:idUsuario", function (req, res) {
    sidebarController.buscarIvy(req, res);
 });

   router.post("/buscarTeam/:idUsuario", function (req, res) {
    sidebarController.buscarTeam(req, res);
 });
 
 module.exports = router;