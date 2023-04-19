axios.defaults.headers.common['Authorization'] = 'C57BZDyeqoO9fanyGKeKwmBW';

let recebeQuizzes = () => {
    axios.get("https://mock-api.driven.com.br/api/vm/buzzquizz/quizzes").then(response => {
        console.log(response.data);
        return response.data
    }).catch(error => {
        console.log(error);
        alert("Algum erro ocorreu, tente novamente mais tarde!")
    })
}

recebeQuizzes()