const apiUrl = 'https://pokeapi.co/api/v2/pokemon/charizard'


fetch(apiUrl)
.then(response => response.json())
.then(data => {
    data.height
    console.log(data.height);
})


//response.json()