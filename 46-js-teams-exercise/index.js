const reset = document.querySelector("#reset");

let players = {
  pool: [
    "Sam",
    "Vasile",
    "Mimi",
    "Tom",
    "Andrew",
    "Ben",
    "Archibald",
    "Adam",
    "Alex",
    "Aaron",
  ],
  team1: [],
  team2: [],
};

let team1_ul = document.querySelector(".team1");
let team2_ul = document.querySelector(".team2");
const pool_ul = document.querySelector(".pool");

const createPlayerEl = () => {
  for (let i = 0; i < players.pool.length - 1; i++) {
    const li = document.createElement('li');
    li.innerHTML = `${players.pool[i]} <button class="to_team1"> < </button><button class="to_team2"> > </button>`;
    pool_ul.appendChild(li);

    const buttonToTeam1 = li.querySelector('.to_team1');
    li.appendChild(buttonToTeam1);
    buttonToTeam1.addEventListener('click', () => {
      players.team1.push(li);
      players.pool.pop(li);
      team1_ul.appendChild(li);
    })

    const buttonToTeam2 = li.querySelector('.to_team2');
    li.appendChild(buttonToTeam2);
    buttonToTeam2.addEventListener('click', () => {
      players.team2.push(li);
      players.pool.pop(li);
      team2_ul.appendChild(li);
    })

  }
}


reset.addEventListener('click', () => {
  players.team1 = [];
  players.team2 = [];
  players.pool = [
    "Sam",
    "Vasile",
    "Mimi",
    "Tom",
    "Andrew",
    "Ben",
    "Archibald",
    "Adam",
    "Alex",
    "Aaron",];

  team1_ul.innerHTML = '';
  team2_ul.innerHTML = '';
  pool_ul.innerHTML = '';

  createPlayerEl();
});

createPlayerEl();


/* ======================= */
/**
 * Create a team picker app which will have 3 columns:
 *
 * 1. Pool of players
 * 2. Team 1
 * 3. Team 2
 *
 * Requirements:
 * 1. On load all players from {players.pool} should be rendered
 * in "Pool" column
 * 2. Each player element should has player name, and two buttons
 * to pick a side(check markup example for {createPlayerEl} function)
 * 3. when I click on a button with class "to_team1", this player needs
 * to be removed from "pool" list and added to "Team 1" list
 * 4. when I click on a button with class "to_team2", this player needs
 * to be removed from "pool" list and added to "Team 2" list
 * 5. Inside "Pool" container you have "Reset" button. When you click on it,
 * it should reset all lists to initial state.
 *
 * NOTE: remember to keep {players} object always updated.
 */
/* ======================= */

/**
 * As a part of team picker app, you need to create
 * a function {createPlayerEl} which takes a player name and return
 * a markup for this player
 *
 * Player markup should be:
 * <li class="player">
 *  <p>${name}</p>
 *	<div class="buttons">
 *    <button class="btn to_team1"> < </button>
 *    <button class="btn to_team2"> > </button>
 *  </div>
 * </li>
 */
