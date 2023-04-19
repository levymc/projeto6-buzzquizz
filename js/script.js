// Declarando o token do axios
axios.defaults.headers.common['Authorization'] = 'C57BZDyeqoO9fanyGKeKwmBW';


// Declarando variáveis globais
let container = document.querySelector(".container")
let divQuiz = document.querySelector(".quiz")
let criacaoInfos = document.querySelector(".criacao-infos")


// Seção de Funções

let renderizarTela1 = () => {
    container.innerHTML = '';
    container.innerHTML = `<div class="container-usuario1 mostrar">
                <h4>Você não criou nenhum <br />quizz ainda :(</h4>
                    <div class="btn-criarQuizz" onclick="renderizarTela3()">Criar Quizz</div>
            </div>
            <div class="container-usuario2 esconder">
                <div class="cabecalhoUserQuizzes">
                    <h4>Seus Quizzes</h4>
                    <div class="btn-addUserQuiz" onclick="recarregaPagina()"><img src="./img/plussimbol.svg" alt="+"></div>
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
        <div class="criacao-infos">
        <input type="text" id="titulo" placeholder="Texto da pergunta">
        <input type="text" id="titulo" placeholder="Texto da pergunta">
        <input type="text" id="titulo" placeholder="Texto da pergunta">
        <input type="text" id="titulo" placeholder="Texto da pergunta">
        <input type="text" id="titulo" placeholder="Texto da pergunta">
        </div>
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
    // Swal.fire({
    //     title:"Aguarde....",
    //     showConfirmButton: true,
    //     confirmButtonColor: '#007bff',
    //     icon:"warning",
    //     confirmButtonText: "Ok",
    //     showCloseButton: true,
    // })
}



// Inicializando funções
recebeQuizzes();
