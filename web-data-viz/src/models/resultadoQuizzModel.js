var database = require("../database/config")

function enviarResultadoQuizz(idUsuario, pontuacaoQuizz) {
    var instrucaoSql = `
    INSERT INTO resultadoQuizz (fkUsuario, pontuacaoConhecimento) VALUES (${idUsuario}, '${pontuacaoQuizz}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    enviarResultadoQuizz
};