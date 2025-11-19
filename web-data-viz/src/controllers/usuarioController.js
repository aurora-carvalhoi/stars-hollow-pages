var usuarioModel = require("../models/usuarioModel");
// var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) {
    var nomeUsuario = req.body.nomeUsuarioServer;
    var senha = req.body.senhaServer;

    if (nomeUsuario == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(nomeUsuario, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        res.json(resultadoAutenticar)

                        // aquarioModel.buscarAquariosPorEmpresa(resultadoAutenticar[0].empresaId)
                        //     .then((resultadoAquarios) => {
                        //         if (resultadoAquarios.length > 0) {
                        //             res.json({
                        //                 id: resultadoAutenticar[0].id,
                        //                 email: resultadoAutenticar[0].email,
                        //                 nome: resultadoAutenticar[0].nome,
                        //                 senha: resultadoAutenticar[0].senha,
                        //                 aquarios: resultadoAquarios
                        //             });
                        //         } else {
                        //             res.status(204).json({ aquarios: [] });
                        //         }
                        //     })
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
       var primeiroNome = req.body.nomeServer
       var email = req.body.emailServer
       var nomeUsuario = req.body.nomeUsuarioServer
       var dtNascimento = req.body.dtNascimentoServer
       var fkPersonagemFav = req.body.personagemFavServer
       var fkBoyFav = req.body.boyFavServer
       var fkIvyLeague = req.body.ivyLeagueServer
       var qtdViews = req.body.qtdViewsServer
       var senha = req.body.senhaServer
    // primeiroNome, email, nomeUsuario, dtNascimento, fkPersonagemFav,fkBoyFav, fkIvyLeague, qtdViews, senha

    // Faça as validações dos valores
    if (primeiroNome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (nomeUsuario == undefined) {
        res.status(400).send("Seu nome de usuário está undefined!");
    } else if (dtNascimento == undefined) {
        res.status(400).send("Sua data de nascimento está undefined!");
    } else if (fkPersonagemFav == undefined) {
        res.status(400).send("Seu personagem favorito está undefined!");
    }else if (fkBoyFav == undefined) {
        res.status(400).send("Seu team está undefined!");
    }else if (fkIvyLeague == undefined) {
        res.status(400).send("Sua Ivy League está undefined!");
    } else if (qtdViews == undefined) {
        res.status(400).send("A quantidade de vezes que você viu a série está undefined!");
    }else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(primeiroNome, email, nomeUsuario, dtNascimento, fkPersonagemFav,fkBoyFav, fkIvyLeague, qtdViews, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    autenticar,
    cadastrar
}