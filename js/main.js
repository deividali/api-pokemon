function fetchPokemon(){
const nombrePokemon = document.getElementById("pokemon-name").value.toLowerCase();

if(nombrePokemon===""){
    alert("No has escrito nada")
    return

}

fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
    //.then(res=>res.json())
.then(res=>{
    console.log(res)
    if(!res.ok){
        throw new Error("Pokemon No Encontrado");
    }
    return res.json()
})

.then((data)=>displayPokemon(data))

.then((data)=>displayPokemon(data).catch((error)=>console.error("error atrapando el pokemon",error)));

}
function displayPokemon(pokemon){
    const pokemonInfo = document.getElementById('pokemon-info')
    pokemonInfo.innerHTML=`

    <div class="row">
        <div class="col s12 m7">
        <div class="card">
            <div class="card-image">
            <img src="${pokemon.sprites.front_default}">
            <span class="card-title" style="color:black">${pokemon.name}</span>
            </div>
            <div class="card-content">
                <p>id:${pokemon.id}</p>
                <p>peso:${pokemon.weight}kg</p>
                <p>altura:${pokemon.height}</p>
            </div>
        </div>
        </div>
    </div>

    `

}

