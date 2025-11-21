var express = require("express");
var router = express.Router();

var resultadoQuizzController = require("../controllers/resultadoQuizzController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/enviarResultado", function (req, res) {
    resultadoQuizzController.enviarResultado(req, res);
})


module.exports = router;