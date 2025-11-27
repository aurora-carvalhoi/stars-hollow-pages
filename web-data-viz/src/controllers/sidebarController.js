 var sidebarModel = require("../models/sidebarModel.js");


 function buscarAvatar(req, res) {

     var idUsuario = req.params.idUsuario;

     sidebarModel.buscarAvatar(idUsuario).then(function (resultado) {
         if (resultado.length > 0) {
             res.status(200).json(resultado);
         } else {
             res.status(204).send("Nenhum resultado encontrado!")
         }
     }).catch(function (erro) {
         console.log(erro);
         console.log("Houve um erro ao buscar o avatar", erro.sqlMessage);
         res.status(500).json(erro.sqlMessage);
     });
 }

 

  module.exports = {
    buscarAvatar
  }