const botao = document.getElementById('btn-atualizar')

/*Função que gera um número de forma randomica*/
const gerarNumeroRandomico = () => {
    return 1 + Math.floor(Math.random() * 670)
}

/*
  Função que vai na api do ricky and morty buscar as informações dos personagens 
  de acordo com o número gerado aleatoriamente  
*/
const buscarNaApi = () => {
    /*Laço de repetição utilizado para fazer 4 requisições*/
    for(let i = 0; i < 4; i++){
        
        const idPersonagem = gerarNumeroRandomico()

        fetch(`https://rickandmortyapi.com/api/character/${idPersonagem}`)
        .then(res => res.json())
        .then(data => {
            /*Pegando a tag image do html */
            const image = document.getElementById(`foto-${i}`)
            /*Setando a imagem */
            image.src = data.image
            
            /*Pegando a tag p do html */
            const nome = document.getElementById(`nome-${i}`)
            /*Setando o nome */
            nome.innerText = data.name
        })

    }
    
}

botao.onclick = buscarNaApi

