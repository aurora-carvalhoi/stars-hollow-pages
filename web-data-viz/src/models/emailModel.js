var database = require("../database/config");

function listar() {
  var instrucaoSql = `SELECT nomeUsuario, email FROM usuario`;

  return database.executar(instrucaoSql);
}


module.exports = {listar };
