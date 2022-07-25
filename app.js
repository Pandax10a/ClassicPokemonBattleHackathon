Cookies.set(`player_1`);
Cookies.set(`enemy_chosen`);
Cookies.set(`current_user`);


let to_battle = document.querySelector(`#chosen_raticate`);
to_battle.addEventListener(`click`, enter_battle);

function enter_battle() {
    Cookies.set(`player_1`, `raticate`);
    location.href = "battle.html"
}

let to_battle_2 = document.querySelector(`#chosen_magikarp`);
to_battle_2.addEventListener(`click`, enter_battle_2);

function enter_battle_2() {
    Cookies.set(`player_1`, `magikarp`);
    location.href = "battle.html"
}

let to_battle_3 = document.querySelector(`#chosen_blastoise`);
to_battle_3.addEventListener(`click`, enter_battle_3);

function enter_battle_3() {
    Cookies.set(`player_1`, `blastoise`);
    location.href = "battle.html"
}


// set 4 cookies
/*  function pick_pokemon (details){
    let pokemon_json = JSON.stringify(pokemon);
    Cookies.set(`user_selection`, pokemon_json);
} */