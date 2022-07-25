
let enemies = {
    name: `muk`,
    image_url: `https://projectpokemon.org/images/shiny-sprite/muk.gif`,
    HP: 100,
    Att: [`Poison Jab`, `Gunk Shot`],  
}

let raticate = {
    name: `raticate`,
    image_url: `https://projectpokemon.org/images/normal-sprite/raticate-f.gif`,
    HP: 120,
    Att: [`Quick Attack`, `Tackle`, `Tail Whip`],  
}

let magikarp = {
    name: `magikarp`,
    image_url: `https://projectpokemon.org/images/shiny-sprite/magikarp-f.gif`,
    HP: 60,
    Att: [`Struggle`, `Frustration`, `Return`],  
}

let blastoise = {
    name: `blastoise`,
    image_url: `https://projectpokemon.org/images/normal-sprite/blastoise-mega.gif`,
    HP: 200,
    Att: [`Hydro Pump`, `Skull Bash`, `Hydro Cannon`],  
}

// let muk_json = muk.stringify(muk);
// Cookies.set(`enemy_chosen`, muk_json);
// Cookies.set(`enemy_chosen`);
// Cookies.set(`current_user`);
let player_1_info = Cookies.get(`player_1`);

if (player_1_info === `raticate`) {
    let raticate_json = JSON.stringify(raticate);
    Cookies.set(`current_user`, raticate_json);
    let enemies_json = JSON.stringify(enemies);
    Cookies.set(`enemy_chosen`, enemies_json);
    window.addEventListener(`load`, selected_enemy);
    window.addEventListener(`load`, selected_player(raticate));
} else if (player_1_info === `magikarp`) {
    let magikarp_json = JSON.stringify(magikarp);
    Cookies.set(`current_user`, magikarp_json);
    let enemies_json = JSON.stringify(enemies);
    Cookies.set(`enemy_chosen`, enemies_json);
    window.addEventListener(`load`, selected_enemy);
    window.addEventListener(`load`, selected_player(magikarp));
} else if (player_1_info === `blastoise`) {
    let blastoise_json = JSON.stringify(blastoise);
    Cookies.set(`current_user`, blastoise_json);
    let enemies_json = JSON.stringify(enemies);
    Cookies.set(`enemy_chosen`, enemies_json);
    window.addEventListener(`load`, selected_enemy);
    window.addEventListener(`load`, selected_player(blastoise));
}
/*
Cookies.set(`enemy_chosen`, blastoise);
function set_current_user (details) {
    let raticate_json = JSON.stringify(raticate);
    Cookies.set(`current_user`, raticate_json);
    // let muk_json = JSON.stringify(muk);
    // Cookies.set(`enemy_chosen`, muk_json);
    console.log(raticate_json);
}
*/


//function for displays enemy info and gif
function selected_enemy() {
let enemy_display = document.querySelector(`#enemy_pokemon_1`);
enemy_display.insertAdjacentHTML(`afterbegin`, 
`<h1>Battle Begin</h1>
<h1>Enemy: MuK!!!</h1>
<img src = '${enemies[`image_url`]}' alt = "pokemon">`);
}

// getting enemy key value
// let enemy_pokemon_json = Cookies.get(`enemy_chosen`);
// let enemy_pokemon = JSON.parse(`enemy_pokemon_json`);

// getting player selected pokemon key value
// let current_pokemon_json = Cookies.get(`current_user`);
// let current_pokemon = JSON.parse(`current_pokemon_json`);
// console.log(current_pokemon[`name`]);
// displays player info and gif

function selected_player (a) {
let player_display = document.querySelector(`#chosen_player_pokemon`);
player_display.insertAdjacentHTML(`afterbegin`, `<h1>You have spotted a ${enemies[`name`]}!</h1>
<h1>Engaging with ${a[`name`]}!!</h1>
<img src = '${a[`image_url`]}'  alt = "pokemon">`);
}