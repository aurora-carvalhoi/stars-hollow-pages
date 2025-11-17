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
    // let isUltima = numeroDaQuestaoAtual == quantidadeDeQuestoes-1 ? true : false

    function iniciarQuiz() {
        document.getElementById('conteudoPrincipal').style.display = "none"

        document.getElementById('divQuizz').classList.add('ativo')
        // document.getElementById('pontuacao').style.display = "block"
        document.getElementById('jogo').classList.add('jogo')
        document.getElementById('btnIniciarQuiz').style.display = "none"

        document.getElementById('qtdQuestoes').innerHTML = quantidadeDeQuestoes

        preencherHTMLcomQuestaoAtual(0)

        btnSubmeter.disabled = false
        btnProx.disabled = true
        // btnConcluir.disabled = true
        // btnTentarNovamente.disabled = true
    }

    function preencherHTMLcomQuestaoAtual(index) {
        habilitarAlternativas(true)
        const questaoAtual = listaDeQuestoes[index]
        numeroDaQuestaoAtual = index
        console.log("questaoAtual")
        console.log(questaoAtual)
        document.getElementById("spanNumeroDaQuestaoAtual").innerHTML = Number(index) + 1 // ajustando porque o index começa em 0
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
        // limparCoresBackgroundOpcoes()
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

                // document.getElementById(wrongLabelId).classList.add("text-danger-with-bg")
                // document.getElementById(alternativaCorreta).classList.add("text-success-with-bg")
                tentativaIncorreta++
                erradas++
                document.getElementById("spanErradas").innerHTML = erradas
                numeroDaQuestaoAtual++
            }
        })
    }

    // function limparCoresBackgroundOpcoes() {
    //     const options = document.getElementsByName("option");
    //     options.forEach((option) => {
    //         document.getElementById(option.labels[0].id).classList.remove("text-danger-with-bg")
    //         document.getElementById(option.labels[0].id).classList.remove("text-success-with-bg")
    //     })
    // }

    function desmarcarRadioButtons() {
        const options = document.getElementsByName("option");
        for (let i = 0; i < options.length; i++) {
            options[i].checked = false;
        }
    }

    function trocarBotao(){
   
    var imgBotaoAvancar = document.getElementById('botaoAvancar');
    
    if (imgBotaoAvancar.src.includes('public/assets/icones/botao_avancar.svg')) {
      imgBotaoAvancar.src = 'public/assets/icones/botao_finalizar.svg';
    } else {
      imgBotaoAvancar.src = 'public/assets/icones/botao_avancar.svg';
    }
  }
    

    function finalizarJogo() {
        document.getElementById('btnTentarNovamente').classList.add('ativo')
        document.getElementById('divQuizz').classList.remove('ativo')

        let textoParaMensagemFinal = null
        const porcentagemFinalDeAcertos = pontuacaoFinal / quantidadeDeQuestoes

        if (porcentagemFinalDeAcertos <= 0.3) {
            textoParaMensagemFinal = `<h2>Precisa assistir mais a série ein?</h2><br>
        <img src="../public/assets/imagens/resultado1.jpeg" alt="">`
        }
        else if (porcentagemFinalDeAcertos > 0.3 && porcentagemFinalDeAcertos < 0.9) {
            textoParaMensagemFinal = `<h2>Um B+ no seu boletim é suficiente pra você?</h2>
              <img src="../public/assets/imagens/resultado2.jpg" alt="">`
        }
        else if (porcentagemFinalDeAcertos >= 0.9) {
            textoParaMensagemFinal = `<h2>É o orgulho de Stars hollow!</h2>
              <img src="../public/assets/imagens/resultado3.png" alt="">`
        }

        textoParaMensagemFinal += "<br><span> Você acertou " + Math.round((porcentagemFinalDeAcertos)*100) + "% das questões.</span>"


        document.getElementById('msgFinal').innerHTML = textoParaMensagemFinal
        document.getElementById('spanPontuacaoFinal').innerHTML = pontuacaoFinal

        btnProx.disabled = true
        btnSubmeter.disabled = true
        // btnConcluir.disabled = true
        // btnTentarNovamente.disabled = false

    }

        function tentarNovamente() {
        // atualiza a página
        window.location.reload()
    }
