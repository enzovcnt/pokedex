//const apiUrl = `https://pokeapi.co/api/v2/pokemon/mewtwo`
const name = document.querySelector('.name')
const type1 = document.querySelector('.type1')
const type2 = document.querySelector('.type2')
const height = document.querySelector('.height')
const weight = document.querySelector('.weight')
const sprite = document.querySelector('.sprite')

const button = document.querySelector('.bouton')





function searchPokemon(){
    const pokemonName = document.querySelector('.search').value;
    const apiUrlDynamic = `https://pokeapi.co/api/v2/pokemon/` + pokemonName;
    fetch(apiUrlDynamic)
        .then(response => response.json())
        .then(data => {
            name.innerHTML = data.name;
            console.log(name.innerHTML);
            sprite.src = data.sprites.front_default;
            console.log('image');
            type1.innerHTML = data.types[0].type.name
            if (data.types[1]){
                type2.innerHTML = data.types[1].type.name;
                console.log ('je suis type 0')
            }else{
                type2.innerHTML = '';
                console.log ('j ai un type')
                //let typeNone = document.querySelector('.types')
                //typeNone.classList.remove('type2')
                //typeNone.classList.add('typeNone1');
            }
            height.innerHTML ='Height :' + data.height;
            weight.innerHTML ='Weight :' + data.weight;
            let audio = new Audio(data.cries.latest);
            audio.play()
        })
        .catch(error => console.log(error))
}

button.addEventListener('click', searchPokemon);

const typeName = document.querySelector('.tru');
function tableType(){
    const apiUrlType = 'https://pokeapi.co/api/v2/type'
    fetch(apiUrlType)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            typeName.innerHTML = data.name;
            console.log(typeName.innerHTML);
    })
        .catch(error => console.log(error))
}

tableType();



// étape 1 = faire une carte pour un pokemon > ok
// étape 2 = url dynamique > ${} ?? ok
// étape 3 = recherche possible selon le nom du pokemon ok
// étape 4 = afficher tout les pokemons sur la même page
// étape 5 = faire table des types
// étape 6 = faire une page ou menu déroulant pour les objets/baies
// étpae 7 = mettre toutes les variantes d'un pokemon
// étape 4 = passer d'une simple promesse à async et await > m'a lair d'être le plus utilisé