 var express = require("express");
 var router = express.Router();

 var pontuacaoQuizzController = require("../controllers/pontuacaoQuizzController.js");

 router.post("/Maior/:idUsuario", function (req, res) {
    pontuacaoQuizzController.buscarMaiorPontuacao(req, res);
 });


router.post("/buscarPontuacaoMedia/:idUsuario", function (req, res) {
     pontuacaoQuizzController.buscarPontuacaoMedia(req, res);
});

router.post("/buscarQtdTentativas/:idUsuario", function (req, res) {
     pontuacaoQuizzController.buscarQtdTentativas(req, res);
});

router.post("/buscarPorcentagens/:idUsuario", function (req, res) {
     pontuacaoQuizzController.buscarPorcentagens(req, res);
});

router.post("/buscarQtdUsuariosIvy", function (req, res) {
     pontuacaoQuizzController.buscarQtdUsuariosIvy(req, res);
});

router.post("/buscarQtdViews", function (req, res) {
     pontuacaoQuizzController.buscarQtdViews(req, res);
});
 module.exports = router;