 var database = require("../database/config");

 function buscarMaiorPontuacao(idUsuario) {

     var instrucaoSql = `select MAX(pontuacaoConhecimento) as maxima FROM resultadoQuizz
where fkUsuario = ${idUsuario};`;

     console.log("Executando a instrução SQL: \n" + instrucaoSql);
     return database.executar(instrucaoSql);
 }



 function buscarPontuacaoMedia() {
   var instrucaoSql = `select ROUND(AVG(pontuacaoConhecimento),2) AS media FROM resultadoQuizz;`;
   console.log("Executando a instrução SQL: \n" + instrucaoSql);

  
     return database.executar(instrucaoSql);
 }


  function buscarQtdTentativas(idUsuario) {
   var instrucaoSql = `select count(idResposta) as tentativas from resultadoQuizz where fkUsuario = ${idUsuario}`;
   console.log("Executando a instrução SQL: \n" + instrucaoSql);
     return database.executar(instrucaoSql);
 }

   function buscarPorcentagens(idUsuario) {
   var instrucaoSql = `select dtQuizz, pontuacaoConhecimento from resultadoQuizz join usuario on fkUsuario = idUsuario where fkUsuario = ${idUsuario};`;
   console.log("Executando a instrução SQL: \n" + instrucaoSql);
     return database.executar(instrucaoSql);
 }

    function buscarQtdUsuariosIvy() {
   var instrucaoSql = `select il.nome as nomeIvy, COUNT(*) as qtd_usuarios FROM usuario JOIN ivyLeague as il on usuario.fkIvyLeague = il.idIvy GROUP BY il.nome;`;
   console.log("Executando a instrução SQL: \n" + instrucaoSql);
     return database.executar(instrucaoSql);
 }

    function buscarQtdViews() {
   var instrucaoSql = `select qtdViews, COUNT(*) as qtd_usuarios from usuario group by qtdViews;`;
   console.log("Executando a instrução SQL: \n" + instrucaoSql);
     return database.executar(instrucaoSql);
 }

  module.exports = {
    buscarMaiorPontuacao,
    buscarPontuacaoMedia,
    buscarQtdTentativas,
    buscarPorcentagens,
    buscarQtdUsuariosIvy,
    buscarQtdViews
 }