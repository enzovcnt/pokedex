const apiUrl = `https://pokeapi.co/api/v2/pokemon/charizard`
const name = document.querySelector('.name')
const type = document.querySelector('.type')
const height = document.querySelector('.height')
const weight = document.querySelector('.weight')
const sprite = document.querySelector('.sprite')
const button = document.querySelector('.bouton')



function getpokemon(){fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const image = data.sprites.front_default;
        sprite.src = image;
        name.innerHTML = data.name;
    })
    .catch(error => console.log(error))
}

getpokemon();


// étape 1 = faire une carte pour un pokemon
// étape 2 = url dynamique > ${} ??
// étape 3 = recherche possible selon le nom du pokemon
// étape 4 = passer d'une simple promesse à async et await > m'a lair d'être le plus utilisé