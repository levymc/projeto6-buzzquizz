// Declarando o token do axios
axios.defaults.headers.common['Authorization'] = 'C57BZDyeqoO9fanyGKeKwmBW';


// Declarando variáveis globais
let container = document.querySelector(".container")
let divQuiz = document.querySelector(".quiz")
let criacaoInfos = document.querySelector(".criacao-infos")

let infoCriarQuiz = {
    title: "",
    url: "",
    qntPerguntas: "",
    qntNiveis: ""
}

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
                <div class="quiz"><img src="./img/preg.svg" alt=""><h4>O quanto você é de boas?</h4></div>
                <div class="quiz"><img src="./img/preg.svg" alt=""><h4>O quanto você é de boas?</h4></div>
                <div class="quiz"><img src="./img/preg.svg" alt=""><h4>O quanto você é de boas?</h4></div>
                <div class="quiz"><img src="./img/preg.svg" alt=""><h4>O quanto você é de boas?</h4></div>
            </div>`
}


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

let renderizaQuizzes = (listaQuizzes) => {
    let divPrincipal = document.querySelector(".container-todos");
    // divPrincipal.innerHTML = "";
    listaQuizzes.forEach(quiz => {
        console.log(quiz);
        divPrincipal.innerHTML += `<div class="quiz"><img src="${quiz.image}" alt=""><h4>${quiz.title}</h4></div>`
        // divQuiz.style.backgroundImage = `url("../img/unnamed.png")`;
    });
}

let recebeQuizzes = () => {
    axios.get("https://mock-api.driven.com.br/api/vm/buzzquizz/quizzes").then(response => {
        renderizaQuizzes(response.data);
    }).catch(error => {
        console.log(error);
        alert("Algum erro ocorreu, tente novamente mais tarde!")
    })
}

renderizarTela1();
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
    const qntNiveis = document.querySelector("#qntNiveis").value;
    let titleChecked, urlChecked, qntPerguntasChecked, qntNiveisChecked;

    titleChecked = tituloQuiz != '' && tituloQuiz != null && tituloQuiz != undefined && (tituloQuiz.trim().length >= 20 || tituloQuiz.trim().length <= 64) ? true : false;
    // console.log(titleChecked)

    urlChecked = urlQuiz != '' && urlQuiz != null && urlQuiz != undefined  && (urlQuiz.startsWith("http://") || urlQuiz.startsWith("https://")) ? true : false;
    // console.log(urlChecked)

    qntPerguntasChecked = qntPerguntas != '' && qntPerguntas != null && qntPerguntas != undefined && qntPerguntas >= 3 ? true : false;
    console.log(qntPerguntasChecked)

    qntNiveisChecked = qntNiveis != '' && qntNiveis != null && qntNiveis != undefined && qntNiveis >= 2 ? true : false;

    if (titleChecked && urlChecked && qntPerguntasChecked && qntNiveisChecked) {
        infoCriarQuiz = {
            title: tituloQuiz,
            url: urlQuiz,
            qntPerguntas: qntPerguntas,
            qntNiveis: qntNiveis
        };
        console.log(infoCriarQuiz);
        aguarde();
    } else if (!titleChecked){
        alert("Título");
        renderizarTela3();
    } else if (!urlChecked){
        alert("URL");
    }else if (!qntPerguntasChecked){
        alert("qnt perg");
    }else if (!qntNiveisChecked){
        alert("qnt níveis")
    }
}




// Inicializando funções
recebeQuizzes()

function renderizarTela3perguntas() {
    container.innerHTML = '';
    container.innerHTML +=`
            <div class="criacao-perguntas">
                <h3>Crie suas perguntas</h3>
                    <div class="tela-preencher-perguntas">
                        <div class="pergunta expandida">
                            <div class="nome-pergunta" onclick="expandirPergunta()">
                                <h3>Pergunta 1</h3>
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
                        </div>
                    </div>
            </div>
    `

    let preencherPerguntas = document.querySelector(".tela-preencher-perguntas")
    let contador = infoCriarQuiz[qntPerguntas];
    for(i = 0; i > contador; i++){
        preencherPerguntas.innerHTML +=
        `<div class="pergunta escondida">
            <div class="nome-pergunta" onclick="expandirPergunta()">
                <h3>Pergunta 1</h3>
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
}
function expandirPergunta(){
    //quando clica na div .nome-pergunta
    //adiciona a classe expandida e remove a classe escondida
    //usar o toggle
    //o primeiro elemento da div deve começar com a classe expandida
}
