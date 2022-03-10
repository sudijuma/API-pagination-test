const API_URL = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=40";

const pokemonContainer = document.querySelector(".pokemons");

const previousBTN = document.querySelector("#btn-prev");
const nextBTN = document.querySelector("#btn-next");

let API_URL_NEXT = "";
let API_URL_PREV = "";

async function getPokemonName(pagination) {
    try {
        console.log(pagination)
        let API_TO_USE;
        if (pagination === "next") {
            API_TO_USE = API_URL_NEXT;
        } else if (pagination === "previous") {
            API_TO_USE = API_URL_PREV;
        } else {
            API_TO_USE = API_URL;
        }
        const response = await fetch(API_TO_USE);
        const responseJSON = await response.json();

        API_URL_NEXT = responseJSON.next;
        API_URL_PREV = responseJSON.previous;
        previousBTN.disabled = API_URL_PREV === null;
        const pokemonData = responseJSON.results;
        pokemonContainer.innerHTML = "";
        for (let i = 0; i < pokemonData.length; i++) {
            pokemonContainer.innerHTML += `<li>${pokemonData[i].name}</li>`;
        }
    }
    catch (e) {
        console.log(e);
    }
}
getPokemonName();
/* previousBTN.disabled = API_URL_PREVIOUS === null; */
//Previous
let handleClickPrev = function () {
    console.log("You want to go back hot stuff?");
    getPokemonName("previous");
}

previousBTN.addEventListener("click", handleClickPrev);

//next
let handleClickNext = function () {
    console.log("Click me next hottie");
    getPokemonName("next");
}

nextBTN.addEventListener("click", handleClickNext);


/* if (API_URL_PREV === null) {
    previousBTN.disabled = true;
} */

/* async function getPokemonNames(pagination) {
    try {
        console.log(pagination);
        let API_URL_TO_USE;
        if (pagination === "next") {
            API_URL_TO_USE = API_URL_NEXT; // next END POINT
        } else if (pagination === "previous") {
            API_URL_TO_USE = API_URL_PREVIOUS; // previous END POINT
        } else {
            API_URL_TO_USE = API_URL; // origin one
        }
        const response = await fetch(API_URL_TO_USE);
        const responseJSON = await response.json();

        API_URL_NEXT = responseJSON.next;
        API_URL_PREVIOUS = responseJSON.previous;
        const pokemonData = responseJSON.results;

        pokemonsContainer.innerHTML = "";
        for (let i = 0; i < pokemonData.length; i++) {

            pokemonsContainer.innerHTML += <li>${pokemonData[i].name}</li>
        }
    } catch (err) {
        console.log(err);
    }
}
 */