const api = "https://pokeapi.co/api/v2/pokemon"

fetch(api)

.then(response => response.json())

.then((data) =>{
    const fetchUrl = data.results.map(item => fetch(item.url).then(response => response.json()).catch(()=>{console.log("error")}))

    Promise.all(fetchUrl).then((data)=>{
        data.map((item, id)=>{
            document.querySelector("#list").innerHTML+=`
            <div class="container">
                <img src="${item.sprites.front_default}"/>
                <p>${item.name}</p>
            </div>
            `
            switch(item.types[0].type.name){
                case "grass":
                    document.querySelectorAll(".container")[id].style.backgroundImage="linear-gradient(rgb(9, 196, 78),rgb(11, 225, 4))"
                break;
                case "fire":
                    document.querySelectorAll(".container")[id].style.backgroundImage="linear-gradient(rgb(218, 2, 2),rgb(225, 4, 4))"
                break;
                case "water":
                    document.querySelectorAll(".container")[id].style.backgroundImage="linear-gradient(rgb(2, 218, 214),rgb(4, 225, 221)"
                break;
                case "bug":
                    document.querySelectorAll(".container")[id].style.backgroundImage="linear-gradient(rgb(160, 2, 218),rgb(137, 4, 225))"
                break;
                case "normal":
                    document.querySelectorAll(".container")[id].style.backgroundImage="linear-gradient(rgb(193, 193, 193),rgb(215, 215, 215)"
                break;
            }
        })
    })
})

.catch(() => console.log("error!"))