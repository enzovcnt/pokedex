const apiUrl = `https://pokeapi.co/api/v2/pokemon/charizard`
const name = document.querySelector('.name')
const type1 = document.querySelector('.type1')
const type2 = document.querySelector('.type2')
const height = document.querySelector('.height')
const weight = document.querySelector('.weight')
const sprite = document.querySelector('.sprite')
const typeImage = document.querySelector('.typeImage')
const button = document.querySelector('.bouton')



function getpokemon(){
        fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                        const image = data.sprites.front_default;
                        //const imageType = data.types[0].type;
                        sprite.src = image;
                        name.innerHTML = data.name;
                        type1.innerHTML = data.types[0].type.name;
                        type2.innerHTML = data.types[1].type.name;
                        //typeImage.src = imageType;
                        height.innerHTML ='Height :' + data.height;
                        weight.innerHTML ='Weight :' + data.weight;
    })
    .catch(error => console.log(error))

}

getpokemon();

button.addEventListener('click', getpokemon); //networkError when I want to click


// étape 1 = faire une carte pour un pokemon > ok
// étape 2 = url dynamique > ${} ??
// étape 3 = recherche possible selon le nom du pokemon
// étape 4 = passer d'une simple promesse à async et await > m'a lair d'être le plus utilisé