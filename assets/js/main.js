function convertPokemonTypeToLi{
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}


function convertPokemonToLi(pokemon){
    return `
        <li class="pokemon">
            <span class="number">${pokemon.order}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                 ${convertPokemonTypesToLi(pokemon.types).join('')}
                 </ol>
        
                <img src="${pokemon.sprites.other.dream_world.front_default}"
                    alt= "${pokemon.name}">
            </div>
    
        </li>`

}

const pokemonOl = document.getElementById('pokemonList')


    pokeapi.getPokemons().then((pokemons) => {
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            pokemonOl.innerHTML += convertPokemonToLi(pokemon)
            
        }
    }) 
    .catch((erro) => console.error(error))
  