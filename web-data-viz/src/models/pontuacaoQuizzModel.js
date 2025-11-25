 var database = require("../database/config");

 function buscarMaiorPontuacao(idUsuario) {

     var instrucaoSql = `select MAX(pontuacaoConhecimento) as maxima FROM resultadoQuizz
where fkUsuario = ${idUsuario};`;

     console.log("Executando a instrução SQL: \n" + instrucaoSql);
     return database.executar(instrucaoSql);
 }

  module.exports = {
    buscarMaiorPontuacao
 }