
let muk = {
    name: `muk`,
    image_url: `https://projectpokemon.org/images/shiny-sprite/muk.gif`,
    HP: 100,
    Att: [`Poison Jab`, `Gunk Shot`],  
}

let raticate = {
    name: `raticate`,
    HP: 100,
    Att: [`Quick Attack`, `Tackle`, `Tail Whip`],  
}

let magikarp = {
    name: `magikarp`, 
    HP: 100,
    Att: [`Struggle`, `Frustration`, `Return`],  
}

let blastoise = {
    name: `blastoise`,
    HP: 100,
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
    console.log(`testing if this works ${raticate_json}`);
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
