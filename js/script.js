axios.defaults.headers.common['Authorization'] = 'C57BZDyeqoO9fanyGKeKwmBW';

let divPrincipal = document.querySelector(".container-todos");
let divQuiz = document.querySelector(".quiz")

let renderizaQuizzes = (listaQuizzes) => {
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


recebeQuizzes()