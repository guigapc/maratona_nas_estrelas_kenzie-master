// o que são variáveis

// let nome = 'Bertoldo'
// const idade = 33
// nome = 'Rafael'

// funções

// function mostraNome() {
//   let nome = 'Rafael'

//   return nome
// }

// let nomeVindoDaFuncao = mostraNome()

// loop e repetições

// for(let indice = 0; indice < 10; indice + 1) {
//   console.log(indice)
// }

let sound = new Audio('./audio/starwars.mp3')


async function renderizaPessoas() {
  const listaPessoas = document.querySelector('#cardList')
  listaPessoas.innerHTML = ""
  const listaDePessoas = await fetch('https://swapi.dev/api/people', {
    method: "GET"
  })
  .then(function(resposta) {
    return resposta.json()
  })


  //PESSOAS ########################################################################
  for(let indice = 0; indice < listaDePessoas.results.length; indice++) {
    const elemento = listaDePessoas.results[indice]

    const li = document.createElement("li")
    const divFrente = document.createElement('div')
    const divVerso = document.createElement('div')
    const divNomeFrente = document.createElement('div')
    const divNomeVerso = document.createElement('div')
    const listaDados = document.createElement('ul')
    const anoNasc = document.createElement('li')
    const planeta = document.createElement('li')
    const imagem = document.createElement('img')

    li.classList.add('card', 'listCard')
    divFrente.classList.add("face");
    divFrente.classList.add("front");

    divNomeFrente.classList.add("titleCard")
    divNomeFrente.innerText = elemento.name

    divNomeVerso.classList.add("titleCard")
    divNomeVerso.innerText = elemento.name

    listaDados.classList.add("cardData")

    anoNasc.innerText = 'Ano de Nascimento: ' + elemento.birth_year

    const nomePlaneta = await fetch(elemento.homeworld, {
      method: "GET"
    })
    .then(function(resposta) {
      return resposta.json()
    })

    planeta.innerText = 'Planeta: ' + nomePlaneta.name

    divVerso.classList.add('face', 'back')

    imagem.src = "./assets/starduck.png"
    imagem.alt = "starduck"

    listaDados.append(anoNasc, planeta)
    divFrente.append(divNomeFrente, listaDados)
    divVerso.append(divNomeVerso, imagem)
    li.append(divFrente, divVerso)
    listaPessoas.append(li)
  }
  viraCard()
  sound.pause()
  
}

async function renderizaPlanetas() {
  const listaPlanetas = document.querySelector('#cardList')
  
  
  listaPlanetas.innerHTML = ""

  const listaDePlanetas = await fetch('https://swapi.dev/api/planets', {
    method: "GET"
  })
  .then(function(resposta) {
    return resposta.json()
  })

  // PLANETAS ############################################################
  for(let indice = 0; indice < listaDePlanetas.results.length; indice++) {
    const elemento = listaDePlanetas.results[indice]

    const li = document.createElement("li")
    const divFrente = document.createElement('div')
    const divVerso = document.createElement('div')
    const divNomeFrente = document.createElement('div')
    const divNomeVerso = document.createElement('div')
    const listaDados = document.createElement('ul')
    const clima = document.createElement('li')
    const population = document.createElement('li')
    const imagem = document.createElement('img')

    li.classList.add('card', 'listCard')
    divFrente.classList.add("face");
    divFrente.classList.add("front");

    divNomeFrente.classList.add("titleCard")
    divNomeFrente.innerText = elemento.name

    divNomeVerso.classList.add("titleCard")
    divNomeVerso.innerText = elemento.name

    listaDados.classList.add("cardData")

    clima.innerText = 'Clima: ' + elemento.climate

    // const nomePlaneta = await fetch(elemento.homeworld, {
    //   method: "GET"
    // })
    // .then(function(resposta) {
    //   return resposta.json()
    // })

    population.innerText = 'População: ' + elemento.population
    divVerso.classList.add('face', 'back')

    imagem.src = "./assets/starduck.png"
    imagem.alt = "starduck"

    listaDados.append(clima, population)
    divFrente.append(divNomeFrente, listaDados)
    divVerso.append(divNomeVerso, imagem)
    li.append(divFrente, divVerso)
    listaPlanetas.append(li)

}
viraCard()
sound.pause()
}

async function renderizaNaves() {
  const listaNaves = document.querySelector('#cardList')
  
  
  listaNaves.innerHTML = ""

  const listaDeNaves = await fetch('https://swapi.dev/api/starships', {
    method: "GET"
  })
  .then(function(resposta) {
    return resposta.json()
  })

  // NAVES ############################################################
  for(let indice = 0; indice < listaDeNaves.results.length; indice++) {
    const elemento = listaDeNaves.results[indice]

    const li = document.createElement("li")
    const divFrente = document.createElement('div')
    const divVerso = document.createElement('div')
    const divNomeFrente = document.createElement('div')
    const divNomeVerso = document.createElement('div')
    const listaDados = document.createElement('ul')
    const modelo = document.createElement('li')
    const consumiveis = document.createElement('li')
    const imagem = document.createElement('img')

    li.classList.add('card', 'listCard')
    divFrente.classList.add("face");
    divFrente.classList.add("front");

    divNomeFrente.classList.add("titleCard")
    divNomeFrente.innerText = elemento.name

    divNomeVerso.classList.add("titleCard")
    divNomeVerso.innerText = elemento.name

    listaDados.classList.add("cardData")

    modelo.innerText = 'Modelo: ' + elemento.model

    // const nomePlaneta = await fetch(elemento.homeworld, {
    //   method: "GET"
    // })
    // .then(function(resposta) {
    //   return resposta.json()
    // })

    consumiveis.innerText = 'Consumiveis: ' + elemento.consumables
    divVerso.classList.add('face', 'back')

    imagem.src = "./assets/starduck.png"
    imagem.alt = "starduck"

    listaDados.append(modelo, consumiveis)
    divFrente.append(divNomeFrente, listaDados)
    divVerso.append(divNomeVerso, imagem)
    li.append(divFrente, divVerso)
    listaNaves.append(li)

  }
  viraCard()
  sound.pause()


}

async function renderizaFilmes() {
  
  sound.play()
  
  const listaFilmes = document.querySelector('#cardList')
  
  
  listaFilmes.innerHTML = ""

  const listaDeFilmes = await fetch('https://swapi.dev/api/films', {
    method: "GET"
  })
  .then(function(resposta) {
    return resposta.json()
  })
  const listaDeTudo = await fetch('https://swapi.dev/api', {
    method: "GET"
  })
  .then(function(resposta) {
    return resposta.json()
  })
  // FILMES ##########################################################################
  for(let indice = 0; indice < listaDeFilmes.results.length; indice++) {
    const elemento = listaDeFilmes.results[indice]

    const li = document.createElement("li")
    const divFrente = document.createElement('div')
    const divVerso = document.createElement('div')
    const divNomeFrente = document.createElement('div')
    const divNomeVerso = document.createElement('div')
    const listaDados = document.createElement('ul')
    const anoNasc = document.createElement('li')
    const diretor = document.createElement('li')
    const imagem = document.createElement('img')

    li.classList.add('card', 'listCard')
    divFrente.classList.add("face");
    divFrente.classList.add("front");

    divNomeFrente.classList.add("titleCard")
    divNomeFrente.innerText = elemento.title

    divNomeVerso.classList.add("titleCard")
    divNomeVerso.innerText = elemento.title

    listaDados.classList.add("cardData")

    anoNasc.innerText = 'Ano de Nascimento: ' + elemento.release_date

    // const nomePlaneta = await fetch(elemento.homeworld, {
    //   method: "GET"
    // })
    // .then(function(resposta) {
    //   return resposta.json()
    // })

    diretor.innerText = 'Diretor: ' + elemento.director
    divVerso.classList.add('face', 'back')

    imagem.src = "./assets/starduck.png"
    imagem.alt = "starduck"

    listaDados.append(anoNasc, diretor)
    divFrente.append(divNomeFrente, listaDados)
    divVerso.append(divNomeVerso, imagem)
    li.append(divFrente, divVerso)
    listaFilmes.append(li)
  }
  viraCard()

  
  
}

function renderizaTudo(){
  renderizaPessoas()
  renderizaPlanetas()
  renderizaNaves()
  renderizaFilmes()
  sound.pause()
}

function viraCard() {
  const cards = document.querySelectorAll('.listCard')

  for(let indice = 0; indice < cards.length; indice++) {
    const card = cards[indice]

    card.addEventListener('click', function() {
      card.classList.toggle('flip')
    })
  }
}

renderizaTudo()

