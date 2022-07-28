/* a limited pokedex for pokemon with data being used from the game itself organized in object. enemies can be made
into an array in later updates to randomize encounters*/
let enemies = {
    name: `muk`,
    image_url: `https://projectpokemon.org/images/shiny-sprite/muk.gif`,
    HP: 100,
    Current_HP: 100,
    Att: [`Poison Jab`, `Gunk Shot`],  
}

let raticate = {
    name: `raticate`,
    image_url: `https://projectpokemon.org/images/normal-sprite/raticate-f.gif`,
    HP: 120,
    Current_HP: 120,
    Att: [`Quick Attack`, `Tackle`, `Tail Whip`],  
}

let magikarp = {
    name: `magikarp`,
    image_url: `https://projectpokemon.org/images/shiny-sprite/magikarp-f.gif`,
    HP: 60,
    Current_HP: 60,
    Att: [`Struggle`, `Frustration`, `Return`],  
}

let blastoise = {
    name: `blastoise`,
    image_url: `https://projectpokemon.org/images/normal-sprite/blastoise-mega.gif`,
    HP: 200,
    Current_HP: 200,
    Att: [`Hydro Pump`, `Skull Bash`, `Hydro Cannon`],  
}

Cookies.set(`my_hp`);
Cookies.set(`computer_hp`);

// let muk_json = muk.stringify(muk);
// Cookies.set(`enemy_chosen`, muk_json);
// Cookies.set(`enemy_chosen`);
// Cookies.set(`current_user`);
let player_1_info = Cookies.get(`player_1`);

/* for each if conditional, it matches the selected from index page, to match the data held in battle.js. 
it populates the battle page with enemy pokemon setup, the player selected pokemon, and the basic attacks using called
functions, it also sets up the initial value for hp to cookies for both the computer and player   */


if (player_1_info === `raticate`) {
    let raticate_json = JSON.stringify(raticate);
    Cookies.set(`current_user`, raticate_json);
    let enemies_json = JSON.stringify(enemies);
    // Cookies.set(`enemy_chosen`, enemies_json);
    let starting_hp = raticate[`HP`];
    Cookies.set(`my_hp`, `${starting_hp}`);
    let computer_starting_hp = enemies[`Current_HP`];
    Cookies.set(`computer_hp`, computer_starting_hp);
    window.addEventListener(`load`, selected_enemy);
    window.addEventListener(`load`, selected_player(raticate));
    window.addEventListener(`load`, set_button_att(raticate));
} else if (player_1_info === `magikarp`) {
    let magikarp_json = JSON.stringify(magikarp);
    Cookies.set(`current_user`, magikarp_json);
    let enemies_json = JSON.stringify(enemies);
    Cookies.set(`enemy_chosen`, enemies_json);
    let starting_hp = magikarp[`HP`];
    Cookies.set(`my_hp`, `${starting_hp}`);
    let computer_starting_hp = enemies[`HP`];
    Cookies.set(`computer_hp`, computer_starting_hp);
    window.addEventListener(`load`, selected_enemy);
    window.addEventListener(`load`, selected_player(magikarp));
    window.addEventListener(`load`, set_button_att(magikarp));
} else if (player_1_info === `blastoise`) {
    let blastoise_json = JSON.stringify(blastoise);
    Cookies.set(`current_user`, blastoise_json);
    let enemies_json = JSON.stringify(enemies);
    Cookies.set(`enemy_chosen`, enemies_json);
    let starting_hp = blastoise[`HP`];
    Cookies.set(`my_hp`, `${starting_hp}`);
    let computer_starting_hp = enemies[`HP`];
    Cookies.set(`computer_hp`, computer_starting_hp);
    window.addEventListener(`load`, selected_enemy);
    window.addEventListener(`load`, selected_player(blastoise));
    window.addEventListener(`load`, set_button_att(blastoise));
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

// setting the type of attack in a button based on data in object
function set_button_att (a) {
    document.getElementById(`gotta_catch_em_all`).insertAdjacentHTML(`afterbegin`, `<button id = "attack_1">${a[`Att`][0]}</button> <button id = "attack_2">${a[`Att`][1]}</button> <button id = "attack_3">${a[`Att`][2]}</button>`);
}

// the 3 attack boxes
let battle_box_1 = document.getElementById(`attack_1`);
battle_box_1.addEventListener(`click`, quick_attack);

let battle_box_2 = document.getElementById(`attack_2`);
battle_box_2.addEventListener(`click`, tackle);

let battle_box_3 = document.getElementById(`attack_3`);
battle_box_3.addEventListener(`click`, tail_whip);



// the following 3 function will be the damage calculation.  i had the battle log wipe display so it displays it every time
// it is clicked instead
function quick_attack() {

    let computer_hp_json = JSON.stringify(enemies);
    Cookies.set(`computer_hp`, computer_hp_json[`current_HP`]);
    let temp_computer_hp = 
    // let computer_hp = JSON.stringify(``);
    // computer_hp[`HP`] -= 3;

    // temp_boss_hp -= 3; // attack 1 damage value
    // let computer_hp_json = JSON.stringify(`computer_hp`);
    Cookies.set(`computer_hp`, computer_hp_json);

    let my_temp_hp = Cookies.get(`my_hp`);
    let my_temp_hp_json = JSON.stringify(`my_temp_hp`);
    my_temp_hp -= 7; // value of muk's damage, set it to one default value for now
    // Cookies.set(`computer_hp`, temp_boss_hp);
    Cookies.set(`my_hp`, my_temp_hp)
   
    /*if (temp_boss_hp > 0 && my_temp_hp > 0) {
        let battle_log_display = document.querySelector(`#battle_log`)
        battle_log_display[`innerHTML`] = ``;
    battle_log_display.insertAdjacentHTML(`afterbegin`, `<h1>Boss hp: ${Cookies.get(`computer_hp`)}
    <h1>My Hp: ${Cookies.get(`my_hp`)}`);
        console.log(temp_boss_hp)
       } else if (temp_boss_hp < 0) {
        document.getElementById(`gotta_catch_em_all`)[`innerHTML`] = `Victory, You won!!`;
       } else if (my_temp_hp < 0) {
        document.getElementById(`gotta_catch_em_all`)[`innerHTML`] = `Go buy some Master Ball, you need it`;
       } */
} 

function tackle() {
    let temp_boss_hp = Cookies.get(`computer_hp`);
    temp_boss_hp -= 15; // attack 2 damage value
    let my_temp_hp = Cookies.get(`my_hp`);
    my_temp_hp -= 7; // value of muk's damage, set it to one default value for now
    Cookies.set(`computer_hp`, temp_boss_hp);
    Cookies.set(`my_hp`, my_temp_hp)
   
    if (temp_boss_hp > 0 && my_temp_hp > 0) {
        let battle_log_display = document.querySelector(`#battle_log`)
        battle_log_display[`innerHTML`] = ``;
    battle_log_display.insertAdjacentHTML(`afterbegin`, `<h1>Boss hp: ${Cookies.get(`computer_hp`)}
    <h1>My Hp: ${Cookies.get(`my_hp`)}`);
        console.log(temp_boss_hp)
       } else if (temp_boss_hp < 0) {
        document.getElementById(`gotta_catch_em_all`)[`innerHTML`] = `Victory, You won!!`;
       } else if (my_temp_hp < 0) {
        document.getElementById(`gotta_catch_em_all`)[`innerHTML`] = `Go buy some Master Ball, you need it`;
       }
}

function tail_whip() {
    let temp_boss_hp = Cookies.get(`computer_hp`);
    temp_boss_hp -= 11; // attack 3 damage value
    let my_temp_hp = Cookies.get(`my_hp`);
    my_temp_hp -= 7; // value of muk's damage, set it to one default value for now
    Cookies.set(`computer_hp`, temp_boss_hp);
    Cookies.set(`my_hp`, my_temp_hp)
   if (temp_boss_hp > 0 && my_temp_hp > 0) {
    let battle_log_display = document.querySelector(`#battle_log`)
    battle_log_display[`innerHTML`] = ``;
battle_log_display.insertAdjacentHTML(`afterbegin`, `<h1>Boss hp: ${Cookies.get(`computer_hp`)}
<h1>My Hp: ${Cookies.get(`my_hp`)}`);
    console.log(temp_boss_hp) // for my reference to see boss hp going down on click
   } else if (temp_boss_hp < 0) {
    document.getElementById(`gotta_catch_em_all`)[`innerHTML`] = `Victory, You won!!`;
   } else if (my_temp_hp < 0) {
    document.getElementById(`gotta_catch_em_all`)[`innerHTML`] = `Go buy some Master Ball, you need it`;
   }
}


/* the background music is from fan made chrono trigger, i figure games needs music but chrome disabled autoplay
 so now it is up to the player to click on the the music that suits them */