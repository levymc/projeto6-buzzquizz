// Declarando o token do axios
axios.defaults.headers.common['Authorization'] = 'C57BZDyeqoO9fanyGKeKwmBW';


// Declarando variáveis globais
let container = document.querySelector(".container")
let divQuiz = document.querySelector(".quiz")
let criacaoInfos = document.querySelector(".criacao-infos")
let perguntaSelecionada = document.querySelector(".pergunta-selecionada")
let perguntasQuizz = document.querySelector(".perguntas-quizz")
let arrayConfigurado = []
let cadaPerguntaQuizz;
let qntNiveis;
let levels = []
let dadosQuiz ;


let pontosMaximo = 0;
let pontosFeitos = 0;

let imgstring="";
let index;
let userQuizzes ;

let infoCriarQuiz = {
    title: "",
    url: "",
    qntPerguntas: "",
    qntNiveis: ""
}
let perguntasQuiz = [];

let niveisQuiz;

// Seção de Funções

let renderizarTela1 = () => {
    container.innerHTML = '';
    container.innerHTML = `<div class="container-usuario1 mostrar">
                <h4>Você não criou nenhum <br />quizz ainda :(</h4>
                    <div class="btn-criarQuizz" onclick="renderizarTela3()">Criar Quizz</div>
            </div>
            <div class="container-usuario2 esconder ">
                <div class="cabecalhoUserQuizzes">
                    <h4>Seus Quizzes</h4>
                    <div class="btn-addUserQuiz" onclick="renderizarTela3()"><img src="./img/plussimbol.svg" alt="+"></div>
                </div>
                <div class="userQuizzes">
                    <div class="quiz"><img src="./img/preg.svg" alt="preguiça"><h4>O quanto você é de boas?</h4></div>
                    <div class="quiz"><img src="./img/preg.svg" alt="preguiça"><h4>O quanto você é de boas?</h4></div>
                    <div class="quiz"><img src="./img/preg.svg" alt="preguiça"><h4>O quanto você é de boas?</h4></div>
                </div>
            </div>
            <div class="todosQuiz"><h3>Todos os Quizzes</h3></div>
            <div class="container-todos">
                <div class="quiz" onclick="jogarQuizz()"><img src="./img/preg.svg" alt=""><h4>O quanto você é de boas?</h4></div>
                <div class="quiz" onclick="jogarQuizz()"><img src="./img/preg.svg" alt=""><h4>O quanto você é de boas?</h4></div>
                <div class="quiz" onclick="jogarQuizz()"><img src="./img/preg.svg" alt=""><h4>O quanto você é de boas?</h4></div>
                <div class="quiz" onclick="jogarQuizz()"><img src="./img/preg.svg" alt=""><h4>O quanto você é de boas?</h4></div>
            </div>`
}


/*function jogarQuizz(){


   


    let containerTodos = container.querySelector(".container-todos")
    console.log(containerTodos)
    containerTodos.addEventListener("click", function(event) {
        event.target.classList.add("click")
        console.log(event.target)
       // let elementoimg = event.target;
        //let guardarImagem = elementoimg.getAttribute("url")
       // imgstring = guardarImagem.toString()
       
        
        

        const imagemFundoQuizz = document.querySelector(".bannerQuizz")
        clickQuizz.style = `background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${quiz.image})`
        
       console.log(imgstring)        
    });
    container.innerHTML = ''; 

    perguntaSelecionada.innerHTML=`
    <div class="quizzSelecionado">
    <div class="bannerQuizz">O quanto você é de boas?</div>
    <div class="perguntaQuizz">
        <div class="bannerPergunta">
            <h4>Em qual animal Olho-Tonto Moody transfigurou Malfoy?</h4>
        </div>
        <div class="perguntasDoQuizz">
            <div class="opcaoUm" onclick="selecionarOpcao()">
                <img src="./img/image 3.png">
                <h4>Gatíneo</h4>
            </div>
            <div class="opcaoDois" onclick="selecionarOpcao()">
                <img src="./img/image 3.png">
                <h4>Gatíneo</h4>
            </div>
            <div class="opcaoTres" onclick="selecionarOpcao()">
                <img src="./img/image 3.png">
                <h4>Gatíneo</h4>
            </div>
            <div class="opcaoQuatro" onclick="selecionarOpcao()">
                <img src="./img/image 3.png">
                <h4>Gatíneo</h4>
            </div>
        </div>

    </div>
    
</div>
    `;

}*/

let renderizarTela3 = () => {
    container.innerHTML = '';
    container.innerHTML += `
    <div class="tela3">
        <h3>Comece pelo começo</h3>
        <div class="criacao-infos">
            <input type="text" id="tituloQuiz" placeholder="Título do seu quizz">
            <input type="text" id="urlQuiz" placeholder="URL da imagem do seu quizz">
            <input type="number" id="qntPerguntas" placeholder="Quantidade de perguntas do quizz">
            <input type="number" id="qntNiveis" placeholder="Quantidade de níveis do quizz">
        </div>
        <button class="btn1-criarQuiz" onclick="btnCriarQuiz1()">Prosseguir pra criar perguntas</button>
    </div>
    `;

}



let recarregaPagina = () => {
    window.location.reload();
}

// let renderizaQuizzes = (listaQuizzes) => {
//     let divPrincipal = document.querySelector(".container-todos");
//     // divPrincipal.innerHTML = "";
//     listaQuizzes.forEach(quiz => { //<img src="${quiz.image}" alt="">
//         console.log(quiz);
//         divPrincipal.innerHTML += `<div class="quiz"><h4>${quiz.title}</h4></div>`
//         document.querySelector(".quiz").style.backgroundImage = "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 65.1%, #000000 100%), url(https://img.freepik.com/vetores-gratis/castelo-de-conto-de-fadas-mao-desenhado-design_23-2148468272.jpg?w=740&t=st=1682032829~exp=1682033429~hmac=cc07bd823c519d0e378a838531ce5ad427ade9b7757e773b25a9810f99885933)";
//         // divQuiz.style.backgroundImage = `url("../img/unnamed.png")`;
//     });
// }

let renderizaQuizzes = (listaQuizzes) => {
    
    index = listaQuizzes;
    let divPrincipal = document.querySelector(".container-todos");
    divPrincipal.innerHTML = "";
    
    listaQuizzes.forEach(quiz => {
        divPrincipal.innerHTML += `<div class="quiz" style="
        background:linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 65.1%, #000000 100%), url(${quiz.image});
        background-size: cover; 
        background-position: center;
        background-repeat:no-repeat;"
        onclick="jogarQuizz(${quiz.id})"><h4>${quiz.title}</h4></div>`;
    });


}

//EFEITO NAS RESPOSTAS

function selecionarOpcao(elemento, thisElemento){
    //console.log(elemento)

    const pergunta  = thisElemento.closest(".respostaRenderizada");

    const opcoes = Array.from(pergunta.children);

    //console.log(opcoes);

    if (elemento === true) {
        thisElemento.classList.add('acerto');
        pontosFeitos++

        opcoes.forEach(opcao => {
            opcao.classList.add('erradas');
            opcao.removeAttribute('onclick');
        });

        thisElemento.classList.remove('erradas');

        thisElemento.removeAttribute('onclick');
    } else {
        thisElemento.classList.add('errou');
    
        opcoes.forEach(opcao => {
            opcao.classList.add('erradas');

            if (opcao.getAttribute('onclick') === "selecionarOpcao(true, this)") {
                opcao.classList.add('era-certa');
                opcao.removeAttribute('onclick');
                opcao.classList.remove('erradas');
            } else {
                
            }
    
            opcao.removeAttribute('onclick');
        });
        thisElemento.classList.remove('erradas');
    
        thisElemento.removeAttribute('onclick');
    }

    let porcentagemAcertos = Math.ceil((pontosFeitos / pontosMaximo) * 100);

    setTimeout(() => {
        const proximaPergunta = pergunta.closest('.perguntaQuizz').nextElementSibling;

        if (proximaPergunta) {
            proximaPergunta.scrollIntoView({
                behavior: 'smooth'
            });
        } else{
            resultadoQuiz(niveisQuiz, porcentagemAcertos);
        }
    }, 2000);
}

function resultadoQuiz(niveisQuiz, porcentagemAcertos) {
    let nivelAtual = null;
    console.log(porcentagemAcertos);

    for (let i = 0; i < niveisQuiz.length; i++) {
        const nivel = niveisQuiz[i];
        if (nivel.minValue <= porcentagemAcertos) {
            nivelAtual = nivel;
        } else {
            break;
        }
    }

    console.log(nivelAtual);

    if (nivelAtual) {
        let main = document.querySelector("main");

        main.innerHTML +=
        `<div class="resultado">
            <div class="titulo-nivel">
                <h3>${nivelAtual.title}</h3>
            </div>

            <div class="conteudo">
                <img src=${nivelAtual.image}>
                <p>${nivelAtual.text}</p>
            </div>
        </div>

        <div class="botao-reiniciar" onclick="jogarQuizz(element)">
        <p>Reiniciar Quizz</p>
        </div>

        <div class="botao-home" onclick="recarregaPagina()">
        <p>Voltar pra home</p>
        </div>
        `

        const resultado = document.querySelector('.resultado');
        resultado.scrollIntoView({ behavior: 'smooth' });
    } else {
    }
}


function comparador() { 
    return Math.random() - 0.5; 
}

function jogarQuizz(element) {
    Number(element)    
    const promise = axios.get(`https://mock-api.driven.com.br/api/vm/buzzquizz/quizzes/${element}`);
    promise.then(renderizarQuizzClicado);
    promise.catch(error => {
        console.log(error);
        alert("Algum erro ocorreu, tente novamente mais tarde!")
    })


    

    function renderizarQuizzClicado(promessa) {

        

        container.innerHTML = ''; 
        var arrayRespostas = [];
        const quizzClicado = promessa.data
        const QuantidadeQuestionsClicado = quizzClicado.questions.length
        const questionsClicado = quizzClicado.questions
        //console.log(questionsClicado)
        //console.log(QuantidadeQuestionsClicado)

        pontosMaximo = quizzClicado.questions.length
        niveisQuiz = quizzClicado.levels

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        perguntaSelecionada.innerHTML=`
        <div class="quizzSelecionado">
        <div class="bannerQuizz" style = "
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${quizzClicado.image});
        background-size: cover; 
        ">${quizzClicado.title}</div>`;

        
        for(let i=0; i<=QuantidadeQuestionsClicado-1; i++){
        
        perguntasQuizz.innerHTML +=
        `<div class="perguntaQuizz">
            <div class="bannerPergunta" style="
            background-color: ${questionsClicado[i].color};
            display: flex;
            align-items: center;
            justify-content: center;
            word-wrap: break-word;
            word-break:break-all ;
            text-align: center;
            width: 100%;
            height: 138px;">
                <h4>${questionsClicado[i].title}</h4>
            </div> 
            <div class="perguntasDoQuizz">
            </div>
        </div>`


            
            const numeroDeRespostas = questionsClicado[i].answers.length
            //console.log(numeroDeRespostas)
            
            
            for(let u=0; u<= numeroDeRespostas-1; u++){

                
                arrayRespostas.push(`
                <div class="opcaoUm" onclick="selecionarOpcao(${questionsClicado[i].answers[u].isCorrectAnswer}, this)">
                    <img src="${questionsClicado[i].answers[u].image}">
                    <h4>${questionsClicado[i].answers[u].text}</h4>
                </div>
                `)
            

                
                if(u==numeroDeRespostas-1){
                    arrayRespostas.sort(comparador);
                    arrayConfigurado = arrayRespostas.join('')
                    
                   // console.log(arrayConfigurado)
                    let cadaPerguntaQuizz = perguntasQuizz.querySelector(".perguntasDoQuizz")
                    cadaPerguntaQuizz.innerHTML = arrayConfigurado
                    cadaPerguntaQuizz.classList.remove("perguntasDoQuizz")
                    cadaPerguntaQuizz.classList.add("respostaRenderizada")
                    arrayRespostas = []
                }

            }
        }
    

    /*  <div class="perguntasDoQuizz">
        <div class="opcaoUm" onclick="selecionarOpcao()">
                    <img src="${questionsClicado[i].image}">
                    <h4></h4>
                </div>
                <div class="opcaoDois" onclick="selecionarOpcao()">
                    <img src="./img/image 3.png">
                    <h4>Gatíneo</h4>
                </div>
                <div class="opcaoTres" onclick="selecionarOpcao()">
                    <img src="./img/image 3.png">
                    <h4>Gatíneo</h4>
                </div>
                <div class="opcaoQuatro" onclick="selecionarOpcao()">
                    <img src="./img/image 3.png">
                    <h4>Gatíneo</h4>
                </div>
            </div>
    
        </div>
        
    </div>*/
    }
    
}


let recebeQuizzes = () => {
    axios.get("https://mock-api.driven.com.br/api/vm/buzzquizz/quizzes").then(response => {
        renderizaQuizzes(response.data);
        console.log(response.data);
    }).catch(error => {
        console.log(error);
        alert("Algum erro ocorreu, tente novamente mais tarde!")
    })
}


const container1 = document.querySelector('.container-usuario1');
const container2 = document.querySelector('.container-usuario2'); // Modificar para a tela 3 depois!
let criarQuizz = () => {
    container1.classList.remove('mostrar');
    container1.classList.add('esconder');
    container2.classList.remove('esconder');
    container2.classList.add('mostrar');
}

let aguarde = () => {
    Swal.fire({
        title:"Aguarde....",
        showConfirmButton: true,
        confirmButtonColor: '#007bff',
        icon:"warning",
        confirmButtonText: "Ok",
        showCloseButton: true,
    })
}

let btnCriarQuiz1 = () => {
    const tituloQuiz = document.querySelector("#tituloQuiz").value;
    const urlQuiz = document.querySelector("#urlQuiz").value;
    const qntPerguntas = document.querySelector("#qntPerguntas").value;
    qntNiveis = document.querySelector("#qntNiveis").value;
    let titleChecked, urlChecked, qntPerguntasChecked, qntNiveisChecked;

    titleChecked = tituloQuiz != '' && tituloQuiz != null && tituloQuiz != undefined && (tituloQuiz.trim().length >= 20 || tituloQuiz.trim().length <= 64) ? true : false;
    // console.log(titleChecked)

    urlChecked = urlQuiz != '' && urlQuiz != null && urlQuiz != undefined  && (urlQuiz.startsWith("http://") || urlQuiz.startsWith("https://")) ? true : false;
    // console.log(urlChecked)

    qntPerguntasChecked = qntPerguntas != '' && qntPerguntas != null && qntPerguntas != undefined && qntPerguntas >= 3 ? true : false;
    // console.log(qntPerguntasChecked)

    qntNiveisChecked = qntNiveis != '' && qntNiveis != null && qntNiveis != undefined && qntNiveis >= 2 ? true : false;

    if (titleChecked && urlChecked && qntPerguntasChecked && qntNiveisChecked) {
        infoCriarQuiz = {
            title: tituloQuiz,
            url: urlQuiz,
            qntPerguntas: qntPerguntas,
            qntNiveis: qntNiveis
        };
        console.log(infoCriarQuiz);
        renderizarTela3perguntas();
        // renderizarTela3_3()
    } else if (!titleChecked){
        alert("Título");
        renderizarTela3();
    } else if (!urlChecked){
        alert("URL");
        renderizarTela3();
    }else if (!qntPerguntasChecked){
        alert("qnt perg");
        renderizarTela3();
    }else if (!qntNiveisChecked){
        alert("qnt níveis")
        renderizarTela3();
    }


}




// Inicializando funções
recebeQuizzes()
renderizarTela1();
//renderizarTela3_3();
//renderizarTelaNivel();

function renderizarTela3perguntas() {
    container.innerHTML = '';
    container.innerHTML +=`
                <h3>Crie suas perguntas</h3>
                    <div class="tela-preencher-perguntas">
                        <div class="pergunta expandida">
                            <div class="nome-pergunta" onclick="expandirPergunta(event)">
                                <h3>Pergunta 1</h3>
                                <img src="./img/editarpergunta.svg" alt="editar pergunta">
                            </div>

                            <div class="conteudo-pergunta">
                                <input type="text" id="titulo" placeholder="Texto da pergunta">
                                <input type="text" data-mask="#000000" id="cor" placeholder="Cor de fundo da pergunta">
            
                                <h3>Resposta correta</h3>
            
                                <input type="text" id="resposta-correta" placeholder="Resposta correta">
                                <input type="url" pattern="https://*" id="link-correta" placeholder="URL da imagem">
            
                                <h3>Respostas incorretas</h3>
            
                                <input type="text" id="resposta1" placeholder="Resposta incorreta 1">
                                <input type="url" pattern="https://*" id="link1" placeholder="URL da imagem 1">
            
                                <input type="text" id="resposta2" placeholder="Resposta incorreta 2">
                                <input type="url" pattern="https://*" id="link2" placeholder="URL da imagem 2">
            
                                <input type="text" id="resposta3" placeholder="Resposta incorreta 3">
                                <input type="url" pattern="https://*" id="link3" placeholder="URL da imagem 3">
                            </div>
                        </div>
                    </div>`

    const contador = infoCriarQuiz["qntPerguntas"];
    for(i = 1; i < contador; i++){
        container.innerHTML +=
        `<div class="pergunta escondida">
            <div class="nome-pergunta" onclick="expandirPergunta(event)">
                <h3>Pergunta ${i+1}</h3>
                <img src="./img/editarpergunta.svg" alt="editar pergunta">
            </div>

            <div class="conteudo-pergunta">
                <input type="text" id="titulo" placeholder="Texto da pergunta">
                <input type="text" id="cor" placeholder="Cor de fundo da pergunta">

                <h3>Resposta correta</h3>

                <input type="text" id="resposta-correta" placeholder="Resposta correta">
                <input type="url" id="link-correta" placeholder="URL da imagem">

                <h3>Respostas incorretas</h3>

                <input type="text" id="resposta1" placeholder="Resposta incorreta 1">
                <input type="url" id="link1" placeholder="URL da imagem 1">

                <input type="text" id="resposta2" placeholder="Resposta incorreta 2">
                <input type="url" id="link2" placeholder="URL da imagem 2">

                <input type="text" id="resposta3" placeholder="Resposta incorreta 3">
                <input type="url" id="link3" placeholder="URL da imagem 3">
            </div>
        </div>`
    }

    container.innerHTML +=
    `<button id="botao-perguntas" type="submit" onclick="botaoValidarPerguntas()">Prosseguir pra criar níveis</button>`
}

function expandirPergunta(event) {
    const pergunta = event.currentTarget.closest('.pergunta').querySelector('.conteudo-pergunta');
    const perguntas = document.querySelectorAll('.pergunta');
    perguntas.forEach((pergunta) => {
        pergunta.classList.remove('expandida');
        pergunta.classList.add('escondida');
    });
    pergunta.parentNode.classList.toggle('escondida');
    pergunta.parentNode.classList.toggle('expandida');
}

function botaoValidarPerguntas(){
    const perguntas = document.querySelectorAll('.pergunta');

    perguntas.forEach((pergunta) => {
        const titulo = pergunta.querySelector('#titulo').value;
        const cor = pergunta.querySelector('#cor').value;

        const respostaCorreta = {
            text: pergunta.querySelector('#resposta-correta').value,
            image: pergunta.querySelector('#link-correta').value,
            isCorrectAnswer: true
        };

        const respostasIncorretas = [
            {
                text: pergunta.querySelector('#resposta1').value,
                image: pergunta.querySelector('#link1').value,
                isCorrectAnswer: false
            },
            {
                text: pergunta.querySelector('#resposta2').value,
                image: pergunta.querySelector('#link2').value,
                isCorrectAnswer: false
            },
            {
                text: pergunta.querySelector('#resposta3').value,
                image: pergunta.querySelector('#link3').value,
                isCorrectAnswer: false
            }
        ];

        //VALIDANDO O TÍTULO E COR

        if (titulo.length < 20){
            alert("O título das perguntas precisa ter pelo menos 20 caracteres");
        }

        else if(!/^#[0-9A-F]{6}$/i.test(cor)){
            alert("A cor das perguntas precisa estar no formato hexadecimal (ex. #3455eb)");
        }

        //VALIDANDO A RESPOSTA CORRETA - OBRIGATÓRIA

        else if (respostaCorreta["text"] === '' || respostaCorreta["text"] === null || respostaCorreta["text"] === undefined) {
            alert("Coloque um texto na sua resposta");
        }
        else if (respostaCorreta["image"] === '' || respostaCorreta["image"] === null || respostaCorreta["image"] === undefined || !respostaCorreta["image"].startsWith("http://") && !respostaCorreta["image"].startsWith("https://")) {
            alert("Adicione uma imagem válida na sua resposta");
        }

        //VALIDANDO A PRIMEIRA RESPOSTA INCORRETA - OBRIGATÓRIA

        else if(respostasIncorretas[0].text === '' || respostasIncorretas[0].text === null || respostasIncorretas[0].text === undefined){
            alert("Adicione pelo menos uma resposta incorreta 1");
        }
        else if(respostasIncorretas[0].image === '' || respostasIncorretas[0].image === null || respostasIncorretas[0].image === undefined || !respostasIncorretas[0].image.startsWith("http://") && !respostasIncorretas[0].image.startsWith("https://")){
            alert("Adicione uma imagem válida na sua resposta resposta incorreta 1");
        }

        //VALIDANDO A SEGUNDA RESPOSTA INCORRETA - OPCIONAL

        //SE TIVER IMAGEM MAS NÃO TIVER TEXTO
        else if((respostasIncorretas[1].text === "" || respostasIncorretas[1].text === null || respostasIncorretas[1].text === undefined) && (respostasIncorretas[1].image !== "" && respostasIncorretas[1].image !== null && respostasIncorretas[1].image !== undefined && respostasIncorretas[1].image.startsWith("http://") || respostasIncorretas[1].image.startsWith("https://"))){
            alert("Adicione um texto para a resposta incorreta 2");
        }
        //SE TIVER TEXTO MAS NÃO TIVER IMAGEM
        else if((respostasIncorretas[1].text !== "" && respostasIncorretas[1].text !== null && respostasIncorretas[1].text !== undefined) && (respostasIncorretas[1].image === "" || respostasIncorretas[1].image === null || respostasIncorretas[1].image === undefined || !respostasIncorretas[1].image.startsWith("http://") && !respostasIncorretas[1].image.startsWith("https://"))){
            alert("Adicione uma imagem válida para a resposta incorreta 2");
        }

        //VALIDANDO A TERCEIRA RESPOSTA INCORRETA - OPCIONAL

        //SE TIVER IMAGEM MAS NÃO TIVER TEXTO
        else if((respostasIncorretas[2].text === "" || respostasIncorretas[2].text === null || respostasIncorretas[2].text === undefined) && (respostasIncorretas[2].image !== "" && respostasIncorretas[2].image !== null && respostasIncorretas[2].image !== undefined && respostasIncorretas[2].image.startsWith("http://") || respostasIncorretas[2].image.startsWith("https://"))){
            alert("Adicione um texto para a resposta incorreta 3");
        }
        //SE TIVER TEXTO MAS NÃO TIVER IMAGEM
        else if((respostasIncorretas[2].text !== "" && respostasIncorretas[2].text !== null && respostasIncorretas[2].text !== undefined) && (respostasIncorretas[2].image === "" || respostasIncorretas[2].image === null || respostasIncorretas[2].image === undefined && !respostasIncorretas[2].image.startsWith("http://") && !respostasIncorretas[2].image.startsWith("https://"))){
            alert("Adicione uma imagem válida para a resposta incorreta 3");
        }

    })

    salvarPerguntasQuiz();
}

function salvarPerguntasQuiz (){
    const perguntas = document.querySelectorAll('.pergunta');

    perguntas.forEach((pergunta) => {
        const titulo = pergunta.querySelector('#titulo').value;
        const cor = pergunta.querySelector('#cor').value;

        const respostaCorreta = {
            text: pergunta.querySelector('#resposta-correta').value,
            image: pergunta.querySelector('#link-correta').value,
            isCorrectAnswer: true
        };

        const respostasIncorretas = [
        {
            text: pergunta.querySelector('#resposta1').value,
            image: pergunta.querySelector('#link1').value,
            isCorrectAnswer: false
        },
        {
            text: pergunta.querySelector('#resposta2').value,
            image: pergunta.querySelector('#link2').value,
            isCorrectAnswer: false
        },
        {
            text: pergunta.querySelector('#resposta3').value,
            image: pergunta.querySelector('#link3').value,
            isCorrectAnswer: false
        }
        ];

        const answers = [respostaCorreta, ...respostasIncorretas];

        const perguntaQuiz = {
            title: titulo,
            color: cor,
            answers: answers
        };
    
        perguntasQuiz.push(perguntaQuiz);
    });
    console.log("salvo perguntas")
    console.log(perguntasQuiz);
    dadosQuiz = {
        title : infoCriarQuiz.title,
        image : infoCriarQuiz.url,
        questions:  perguntasQuiz
    }
    //aguarde();
    renderizarTelaNivel(perguntasQuiz);
}

let renderizarTela3_3 = () => {
    container.innerHTML = '';
    container.innerHTML += `
    <div class="tela3_3 flex">
        <h3>Seu quizz está pronto!</h3>
        <div class="quiz-tela3_3" style="
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 65.1%, #000000 100%), url(${infoCriarQuiz.url});
        background-size: contain;
        background-position: center;
        background-repeat:no-repeat;
        "><h4>${infoCriarQuiz.title}</h4></div>
        <button class="btn-acessarQuizz" onclick="btnCriarQuiz1()">Acessar Quizz</button>
        <button class="btn-Home" onclick="recarregaPagina()">Voltar pra home</button>
    </div>
    `
}

let criarQuiz = () => {
    axios.post("https://mock-api.driven.com.br/api/vm/buzzquizz/quizzes", dados)
}

function renderizarTelaNivel(elemento) {
    
    const nivelPergunta = document.querySelectorAll(".conteudo-nivel");

    container.innerHTML = "";

    container.innerHTML = `
    <h3>Agora, descida os níveis</h3>

    <div class="tela-preencher-nivel">
    <div class="nivel expandida">
        <div class="nome-nivel" onclick="expandirNivel(event)">
            <h3>Nível 1</h3>
            <img src="./img/editarpergunta.svg" alt="editar pergunta">
        </div>

        <div class="conteudo-nivel">
            <input type="text" id="titulo" placeholder="Título do nível">
            <input type="number" id="percentual" placeholder="% de acerto mínimo">
            <input type="url" pattern="https://*"" id="linkImg" placeholder="URL da imagem do nível">
            <input type="text" id="descriptionLevel" placeholder="Descrição do nível">

            
        </div>
    </div>
</div>
`;
    
   

   /* const objNivel = [{
        title: nivelPergunta.getElementById(".titulo").value,
        image: nivelPergunta.getElementById(".linkImg").value,
        text:  nivelPergunta.getElementById(".descriptionLevel").value,
        minValue:0
    }]*/

    for(let i=1; i<=qntNiveis-1; i++){
    container.innerHTML += `
        <div class="tela-preencher-nivel">
        <div class="nivel escondida">
            <div class="nome-nivel" onclick="expandirNivel(event)">
                <h3>Nível ${i+1}</h3>
                <img src="./img/editarpergunta.svg" alt="editar pergunta">
            </div>

            <div class="conteudo-nivel">
                <input type="text" id="titulo" placeholder="Título do nível">
                <input type="number" id="percentual" placeholder="% de acerto mínimo">
                <input type="url" pattern="https://*"" id="linkImg" placeholder="URL da imagem do nível">
                <input type="text" id="descriptionLevel" placeholder="Descrição do nível">

                
            </div>
        </div>
    </div>
    `
    }
    
    container.innerHTML +=
    `<button id="botao-nivel" type="submit" onclick="btnFinalizarQuizz(${dadosQuiz})">Finalizar Quizz</button>`

}

function btnFinalizarQuizz(dadosQuiz){
    let validarTitulo, validarPercentual, validarImagem, validarDescriçãoNivel;

    
    const niveis = document.querySelectorAll(".conteudo-nivel");
    const titulo = document.querySelectorAll("#titulo");

    console.log(titulo);

    niveis.forEach((index1) =>{
        const valorTitulo = index1.querySelector("#titulo").value;
        const valorPercentual = index1.querySelector("#percentual").value;
        parseInt(valorPercentual) 
        const valorImagem = index1.querySelector("#linkImg").value
        const valorDescricaoNivel = index1.querySelector("#descriptionLevel").value
        
        console.log(valorPercentual);
        // Validando título do nível
        if( valorTitulo === "" || valorTitulo === null || valorTitulo === undefined ||  valorTitulo.length < 10){
            alert("Valor do título incorreto")
            validarTitulo = false
        } else{
            validarTitulo = true
        }
    
        if( valorPercentual === "" || valorPercentual === null || valorPercentual === undefined ||  valorPercentual < 0 || valorPercentual > 100){
            alert("Valor do percentual incorreto")
            validarPercentual = false
        } else{
            validarPercentual = true
        }

        if( valorImagem === "" || valorImagem === null || valorImagem === undefined || (!valorImagem.startsWith("http://") && !valorImagem.startsWith("https://") )){
            alert("Imagem incorreta")
            validarImagem = false
        } else{
            validarImagem = true
        }
        
        if( valorDescricaoNivel === "" || valorDescricaoNivel === null || valorDescricaoNivel === undefined || valorDescricaoNivel.length < 30){
            alert("Imagem incorreta")
            validarDescriçãoNivel = false
        } else{
            validarDescriçãoNivel = true
        }
        
    }) 
    
    console.log(validarTitulo)
    console.log(validarPercentual)
    console.log(validarImagem)
    console.log(validarDescriçãoNivel)



    
    console.log(dadosQuiz);
    levels = [];
    
    
if((validarTitulo && validarImagem && validarPercentual && validarDescriçãoNivel) === true){
    niveis.forEach((nivel) =>{
        
        const objNivel = {
            title: nivel.querySelector("#titulo").value,
            image: nivel.querySelector("#linkImg").value,
            text: nivel.querySelector("#descriptionLevel").value,
            minValue: nivel.querySelector("#percentual").value

        }
        const inserirNivel = [objNivel]
        levels.push(inserirNivel)
    }) 
    dadosQuiz.levels = levels;
    // Aqui que deve enviar o dadosQUiz para o servidor https://mock-api.driven.com.br/api/vm/buzzquizz/quizzes
    renderizarTela3_3();
    console.log(dadosQuiz);
} 
    // aguarde();
}



function expandirNivel(event) {
    const pergunta = event.currentTarget.closest('.nivel').querySelector('.conteudo-nivel');
    const perguntas = document.querySelectorAll('.nivel');
    perguntas.forEach((pergunta) => {
        pergunta.classList.remove('expandida');
        pergunta.classList.add('escondida');
    });
    pergunta.parentNode.classList.toggle('escondida');
    pergunta.parentNode.classList.toggle('expandida');
}

// localStorage.setItem('newUser', newUser); // armazena o nome do usuário na localStorage
// newUser = localStorage.getItem('newUser');

