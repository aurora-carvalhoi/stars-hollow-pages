var resultadoQuizzModel = require("../models/resultadoQuizzModel");

function enviarResultado(req, res) {
    var resultadoQuizz = req.body.resultadoQuizzServer;
    var idUsuario = req.body.idUsuario;  // <-- troquei aqui

    console.log("ID usuário recebido:", idUsuario);
    console.log("Resultado recebido:", resultadoQuizz);

    resultadoQuizzModel.enviarResultadoQuizz(idUsuario, resultadoQuizz)
        .then(function (resultado) {
            res.json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro);
        });
}


module.exports = {
 enviarResultado
}