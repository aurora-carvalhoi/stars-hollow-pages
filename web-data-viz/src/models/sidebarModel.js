var database = require("../database/config");

 function buscarAvatar(idUsuario) {

     var instrucaoSql = `select caminhoPersonagem from personagem join usuario on fkPersonagemFav = idPersonagem WHERE idUsuario = ${idUsuario};`;

     console.log("Executando a instrução SQL: \n" + instrucaoSql);
     return database.executar(instrucaoSql);
 }

  function buscarIvy(idUsuario) {

     var instrucaoSql = `select caminhoIvy from ivyLeague join usuario on fkIvyLeague = idIvy WHERE idUsuario = ${idUsuario};`;

     console.log("Executando a instrução SQL: \n" + instrucaoSql);
     return database.executar(instrucaoSql);
 }

   function buscarTeam(idUsuario) {

     var instrucaoSql = `select caminhoPersonagem from personagem join usuario on fkBoyFav = idPersonagem WHERE idUsuario = ${idUsuario};`;

     console.log("Executando a instrução SQL: \n" + instrucaoSql);
     return database.executar(instrucaoSql);
 }

    function buscarUsername(idUsuario) {

     var instrucaoSql = `select nomeUsuario from usuario WHERE idUsuario = ${idUsuario};`;

     console.log("Executando a instrução SQL: \n" + instrucaoSql);
     return database.executar(instrucaoSql);
 }

  module.exports = {
    buscarAvatar,
    buscarIvy,
    buscarTeam,
    buscarUsername
 }