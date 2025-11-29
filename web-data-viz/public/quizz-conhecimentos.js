const listaDeQuestoes = [

        {
            pergunta: "Qual o nome da pousada em que a Lorelai trabalha no início da série?",
            alternativaA: "Dragonfly Inn",
            alternativaB: "Stars Hollow Inn",
            alternativaC: "Independence Inn",
            alternativaD: "Breakfast Inn",
            alternativaCorreta: "alternativaC"
        },

        {
            pergunta: "Pra qual Ivy League a Rory escolhe ir?",
            alternativaA: "Harvard",
            alternativaB: "Princeton",
            alternativaC: "Columbia",
            alternativaD: "Yale",
            alternativaCorreta: "alternativaD"
        },

        {
            pergunta: "Qual o nome do livro que o Jess rouba do quarto da Rory?",
            alternativaA: "To Kill A Mockingbird - Harper Lee",
            alternativaB: "Howl and Other Poems - Allen Ginsberg",
            alternativaC: "Pride and Prejudice - Jane Austen",
            alternativaD: "Crime and Punishment - Fiódor Dostoiévski",
            alternativaCorreta: "alternativaB"
        },

          {
            pergunta: "Qual a razão do primeiro término da Rory e do Dean?",
            alternativaA: "Dean traiu a Rory",
            alternativaB: "Rory estava apaixonada por outro",
            alternativaC: "Dean precisava focar nos estudos",
            alternativaD: "Rory não conseguiu dizer que o amava de volta",
            alternativaCorreta: "alternativaD"
        },

        {
            pergunta: "Qual o nome da filha do Luke?",
            alternativaA: "Jillian",
            alternativaB: "Elizabeth",
            alternativaC: "April",
            alternativaD: "Eleanor",
            alternativaCorreta: "alternativaC"
        },

        {
            pergunta: "Qual era o nome da sociedade secreta que a Rory entra em Yale?",
            alternativaA: "Life and Death Brigade",
            alternativaB: "Tortured Poets Department",
            alternativaC: "Death Poetry Society",
            alternativaD: "Ces't La Vie Club",
            alternativaCorreta: "alternativaA"
        },

       {
            pergunta: "Onde o Jess morava antes de ir para Stars Hollow?",
            alternativaA: "Nova York",
            alternativaB: "Chicago",
            alternativaC: "Boston",
            alternativaD: "Hartford",
            alternativaCorreta: "alternativaA"
        },

         {
            pergunta: "Com quem a Lane se casa na série?",
            alternativaA: "Brian Fuller",
            alternativaB: "Dave Rygalski",
            alternativaC: "Henry Cho",
            alternativaD: "Zack Gerbig",
            alternativaCorreta: "alternativaD"
        },

        {
            pergunta: "Qual o nome da música tema da série?",
            alternativaA: "There She Goes - The La's",
            alternativaB: "Where You Lead - Carole King",
            alternativaC: "Reflecting Light - Sam Phillips",
            alternativaD: "True - Spandau Ballet",
            alternativaCorreta: "alternativaB"
        },
    ]

    // variáveis globais    
    let numeroDaQuestaoAtual = 0
    let pontuacaoFinal = 0
    let tentativaIncorreta = 0
    let certas = 0
    let erradas = 0
    let quantidadeDeQuestoes = listaDeQuestoes.length

    function iniciarQuiz() {
         const idUsuario = sessionStorage.ID_USUARIO

         if (idUsuario < 1 || idUsuario == '' || idUsuario == undefined){
            alert("Você precisa estar logado para responder o quiz! Redirecionando para a página de login...")
            window.location = "login.html";
         }
         
        document.getElementById('conteudoPrincipal').style.display = "none"

        document.getElementById('divQuizz').classList.add('ativo')
        document.getElementById('jogo').classList.add('jogo')
        document.getElementById('btnIniciarQuiz').style.display = "none"

        document.getElementById('qtdQuestoes').innerHTML = quantidadeDeQuestoes

        preencherHTMLcomQuestaoAtual(0)

        btnSubmeter.disabled = false
        btnProx.disabled = true
  
    }

    function preencherHTMLcomQuestaoAtual(index) {
        habilitarAlternativas(true)
        const questaoAtual = listaDeQuestoes[index]
        numeroDaQuestaoAtual = index
        console.log("questaoAtual")
        console.log(questaoAtual)
        document.getElementById("spanNumeroDaQuestaoAtual").innerHTML = Number(index) + 1 
        document.getElementById("spanQuestaoExibida").innerHTML = questaoAtual.pergunta;
        document.getElementById("labelOpcaoUm").innerHTML = questaoAtual.alternativaA;
        document.getElementById("labelOpcaoDois").innerHTML = questaoAtual.alternativaB;
        document.getElementById("labelOpcaoTres").innerHTML = questaoAtual.alternativaC;
        document.getElementById("labelOpcaoQuatro").innerHTML = questaoAtual.alternativaD;
    }

    function submeter() {
        const options = document.getElementsByName("option"); // recupera alternativas no html

        let hasChecked = false
        for (let i = 0; i < options.length; i++) {
            if (options[i].checked) {
                hasChecked = true
                break
            }
        }

        if (!hasChecked) {
            alert("Não há alternativas escolhidas. Escolha uma opção.")
        } else {
            btnSubmeter.disabled = true
            btnProx.disabled = false

            habilitarAlternativas(false)

            checarResposta()
        }
    }

    function habilitarAlternativas(trueOrFalse) {
        let opcaoEscolhida = trueOrFalse ? false : true

        primeiraOpcao.disabled = opcaoEscolhida
        segundaOpcao.disabled = opcaoEscolhida
        terceiraOpcao.disabled = opcaoEscolhida
        quartaOpcao.disabled = opcaoEscolhida

    }

    function avancar() {
        btnProx.disabled = true
        btnSubmeter.disabled = false

        desmarcarRadioButtons()

        if (numeroDaQuestaoAtual < quantidadeDeQuestoes - 1) {
            preencherHTMLcomQuestaoAtual(numeroDaQuestaoAtual)
        } else if (numeroDaQuestaoAtual == quantidadeDeQuestoes - 1) {
          trocarBotao()
            preencherHTMLcomQuestaoAtual(numeroDaQuestaoAtual)
        } else {
            finalizarJogo()
        }
    }

    function checarResposta() {
        const questaoAtual = listaDeQuestoes[numeroDaQuestaoAtual] // questão atual 
        const respostaQuestaoAtual = questaoAtual.alternativaCorreta // qual é a resposta correta da questão atual

        const options = document.getElementsByName("option"); // recupera alternativas no html

        let alternativaCorreta = null // variável para armazenar a alternativa correta

        options.forEach((option) => {
            if (option.value === respostaQuestaoAtual) {
                console.log("alternativaCorreta está no componente: " + alternativaCorreta)
                alternativaCorreta = option.labels[0].id
            }
        })

        // verifica se resposta assinalada é correta
        options.forEach((option) => {
            if (option.checked === true && option.value === respostaQuestaoAtual) {
                // document.getElementById(alternativaCorreta).classList.add("text-success-with-bg")
                pontuacaoFinal++
                certas++
                document.getElementById("spanCertas").innerHTML = certas
                numeroDaQuestaoAtual++
            } else if (option.checked && option.value !== respostaQuestaoAtual) {
                const wrongLabelId = option.labels[0].id

                tentativaIncorreta++
                erradas++
                document.getElementById("spanErradas").innerHTML = erradas
                numeroDaQuestaoAtual++
            }
        })
    }

    function desmarcarRadioButtons() {
        const options = document.getElementsByName("option");
        for (let i = 0; i < options.length; i++) {
            options[i].checked = false;
        }
    }

    function trocarBotao(){
   
    var imgBotaoAvancar = document.getElementById('botaoAvancar');
    
    if (imgBotaoAvancar.src.includes('botao_avancar')) {
      imgBotaoAvancar.src = './assets/icones/botao_finalizar.svg';
    } else {
      imgBotaoAvancar.src = './assets/icones/botao_avancar.svg';
    }
  }
    

    function finalizarJogo() {
        document.getElementById('btnTentarNovamente').classList.add('ativo')
        document.getElementById('divQuizz').classList.remove('ativo')

        let textoParaMensagemFinal = null
        const porcentagemFinalDeAcertos = pontuacaoFinal / quantidadeDeQuestoes

        if (porcentagemFinalDeAcertos <= 0.3) {
            textoParaMensagemFinal = `<h2>Precisa assistir mais a série ein?</h2><br>
        <img src="./assets/imagens/resultado1.jpeg" alt="">`
        }
        else if (porcentagemFinalDeAcertos > 0.3 && porcentagemFinalDeAcertos < 0.9) {
            textoParaMensagemFinal = `<h2>Um B+ no seu boletim é suficiente pra você?</h2>
              <img src="./assets/imagens/resultado2.jpg" alt="">`
        }
        else {
            textoParaMensagemFinal = `<h2>É o orgulho de Stars hollow!</h2>
            <img src="./assets/imagens/resultado4.png" alt="">
            `
        }
        
        var resultadoQuizz = Math.round((porcentagemFinalDeAcertos)*100)

        textoParaMensagemFinal += "<br><span> Você acertou " + resultadoQuizz + "% das questões.</span>"


        document.getElementById('msgFinal').innerHTML = textoParaMensagemFinal
        document.getElementById('spanPontuacaoFinal').innerHTML = pontuacaoFinal

        btnProx.disabled = true
        btnSubmeter.disabled = true
        // btnConcluir.disabled = true
        // btnTentarNovamente.disabled = false
        enviarResultado(resultadoQuizz)

    }

    function enviarResultado(resultadoQuizz){
        var idUsuarioSS = sessionStorage.getItem('ID_USUARIO')
        console.log(sessionStorage.ID_USUARIO)
        fetch("/resultadoQuizz/enviarResultado", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            idUsuario: Number(idUsuarioSS),
            resultadoQuizzServer: resultadoQuizz
          }),
        }) .then(function(resultado){

            if (resultado.ok) {
                console.log("O resultado foi enviado para o banco!")
            }else {
                console.log("Houve um erro ao enviar o resultado para o banco!")
            }

        })
            
        

    }

        function tentarNovamente() {
        // atualiza a página
        window.location.reload()
    }
