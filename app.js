Cookies.set(`player_1`);
Cookies.set(`enemy_chosen`);
Cookies.set(`current_user`);

let to_battle = document.querySelector(`#chosen_raticate`);
to_battle.addEventListener(`click`, enter_battle);

function enter_battle() {
    Cookies.set(`player_1`, `raticate`);
    location.href = "battle.html"
}


// set 4 cookies
/*  function pick_pokemon (details){
    let pokemon_json = JSON.stringify(pokemon);
    Cookies.set(`user_selection`, pokemon_json);
} */