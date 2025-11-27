var database = require("../database/config");

 function buscarAvatar(idUsuario) {

     var instrucaoSql = `select caminhoPersonagem from personagem join usuario on fkPersonagemFav = idPersonagem WHERE idUsuario = ${idUsuario};`;

     console.log("Executando a instrução SQL: \n" + instrucaoSql);
     return database.executar(instrucaoSql);
 }

  module.exports = {
    buscarAvatar
 }