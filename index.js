const api = "https://pokeapi.co/api/v2/pokemon"

fetch(api)

.then(response => response.json())

.then((data) =>{

    for(let i=0;i <= 20;i++){
        let pokemonUrl = data["results"][i]["url"]
        
        fetch(pokemonUrl)
        
        .then(responsePokemon => responsePokemon.json())

        .then(pokemonData => {
            let pokemonType = pokemonData["types"][0]["type"]["name"]
            let pokemonId = pokemonData["id"]
            let pokemonSprite = pokemonData["sprites"]["front_default"]
            let pokemonName = data["results"][i]["name"]
            document.querySelector("#list").innerHTML += `
            <div class="container">
                <img src="${pokemonSprite}"/>
                <p class="name_pokemon">${pokemonName}</p>
                <p class="id">${pokemonId}#</p>
            <div/>
            `
            switch(pokemonType){
                case "fire":
                    document.querySelectorAll(".container")[i].style.backgroundImage = "linear-gradient(rgb(255, 49, 49),rgb(222, 43, 43)"
                break;
                case "bug":

                break;
                case "normal":
                    
                break;
            }
        })

        .catch(() => console.log("erro!!"))
    }   
})

.catch(() => console.log("error!"))