
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
            }
            height.innerHTML ='Height :' + data.height;
            weight.innerHTML ='Weight :' + data.weight;
            let audio = new Audio(data.cries.latest);
            audio.play()
        })
        .catch(error => console.log(error))
}

button.addEventListener('click', searchPokemon);


//liste des noms de pokemon
function listPokemon(){
    const apiUrlPokemon = `https://pokeapi.co/api/v2/pokemon`
    const divListe = document.querySelector('.divPoke')
    fetch(apiUrlPokemon)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            data.results.forEach(pokemon => {
                const list = document.createElement('button');
                list.classList.add('buttonPokemon');
                list.classList.add('btn');
                list.classList.add('btn-danger');
                list.innerHTML = pokemon.name;
                divListe.appendChild(list);
                list.addEventListener('click', function(){
                    buttonsPokemon(pokemon.name);  //appelle la fonction à chaque clic
                });

            })
        })
        .catch(error => console.log(error));
}

listPokemon()

function buttonsPokemon(pokemonName){
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
            }
            height.innerHTML ='Height :' + data.height;
            weight.innerHTML ='Weight :' + data.weight;
            let audio = new Audio(data.cries.latest);
            audio.play()
        })
        .catch(error => console.log(error))
}

//data.name = comme une const juste à lui faire appel