 var express = require("express");
 var router = express.Router();

 var pontuacaoQuizzController = require("../controllers/pontuacaoQuizzController.js");

// /pontuacaoQuizz/1 
 router.post("/:idUsuario", function (req, res) {
    pontuacaoQuizzController.buscarMaiorPontuacao(req, res);
 });

 module.exports = router;