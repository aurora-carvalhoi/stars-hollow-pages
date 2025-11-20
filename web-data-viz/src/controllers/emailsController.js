var emailModel = require("../models/emailModel");


function listar(req, res) {
  emailModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}


module.exports = {
  listar,
};
