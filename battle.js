
let muk = {
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
    // console.log(`testing if this works ${raticate_json}`);
    let muk_json = JSON.stringify(muk);
    Cookies.set(`enemy_chosen`, muk_json);
} else if (player_1_info === `magikarp`) {
    let magikarp_json = JSON.stringify(magikarp);
    Cookies.set(`current_user`, magikarp_json);
    let muk_json = JSON.stringify(muk);
    Cookies.set(`enemy_chosen`, muk_json);
} else if (player_1_info === `blastoise`) {
    let blastoise_json = JSON.stringify(blastoise);
    Cookies.set(`current_user`, blastoise_json);
    let muk_json = JSON.stringify(muk);
    Cookies.set(`enemy_chosen`, muk_json);
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

// displays enemy info and gif
let enemy_display = document.querySelector(`#enemy_pokemon`);
enemy_display.insertAdjacentHTML(`afterbegin`, `<h1>Battle Begin</h1>
<h1>Enemy: MuK!!!</h1>
<img src = "https://projectpokemon.org/images/shiny-sprite/muk.gif" alt = "pokemon">`);

// displays player info and gif
let player_display = document.querySelector(`#chosen_player_pokemon`);
player_display.insertAdjacentHTML(`afterbegin`, `<h1>You have spotted a ${</h1>
<h1>Enemy: MuK!!!</h1>
<img src = "https://projectpokemon.org/images/shiny-sprite/muk.gif" alt = "pokemon">`);