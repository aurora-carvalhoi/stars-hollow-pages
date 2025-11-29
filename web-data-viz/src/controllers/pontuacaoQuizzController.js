 var pontuacaoQuizzModel = require("../models/pontuacaoQuizzModel.js");


 function buscarMaiorPontuacao(req, res) {

     var idUsuario = req.params.idUsuario;

     pontuacaoQuizzModel.buscarMaiorPontuacao(idUsuario).then(function (resultado) {
         if (resultado.length > 0) {
             res.status(200).json(resultado);
         } else {
             res.status(204).send("Nenhum resultado encontrado!")
         }
     }).catch(function (erro) {
         console.log(erro);
         console.log("Houve um erro ao buscar a maior pontuação", erro.sqlMessage);
         res.status(500).json(erro.sqlMessage);
     });
 }


  function buscarPontuacaoMedia(req, res) {

      pontuacaoQuizzModel.buscarPontuacaoMedia().then(function (resultado) {
          if (resultado.length > 0) {
              res.status(200).json(resultado);
          } else {
              res.status(204).send("Nenhum resultado encontrado!")
          }
      }).catch(function (erro) {
          console.log(erro);
          console.log("Houve um erro ao buscar a pontuação média.", erro.sqlMessage);
          res.status(500).json(erro.sqlMessage);
      });
  }


   function buscarQtdTentativas(req, res) {

     var idUsuario = req.params.idUsuario;

     pontuacaoQuizzModel.buscarQtdTentativas(idUsuario).then(function (resultado) {
         if (resultado.length > 0) {
             res.status(200).json(resultado);
         } else {
             res.status(204).send("Nenhum resultado encontrado!")
         }
     }).catch(function (erro) {
         console.log(erro);
         console.log("Houve um erro ao buscar a quantidade de tentativas", erro.sqlMessage);
         res.status(500).json(erro.sqlMessage);
     });
 }

 function buscarPorcentagens(req, res){
    
         var idUsuario = req.params.idUsuario;

         pontuacaoQuizzModel.buscarPorcentagens(idUsuario).then(function (resultado) {
         if (resultado.length > 0) {
             res.status(200).json(resultado);
         } else {
             res.status(204).send("Nenhum resultado encontrado!")
         }
     }).catch(function (erro) {
         console.log(erro);
         console.log("Houve um erro ao buscar as porcentagens", erro.sqlMessage);
         res.status(500).json(erro.sqlMessage);
     });
 }

  module.exports = {
    buscarMaiorPontuacao,
     buscarPontuacaoMedia,
     buscarQtdTentativas,
     buscarPorcentagens
  }