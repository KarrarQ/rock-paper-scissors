var currentGame = new Game()

window.addEventListener('load,', function() {
  currentGame.gameType = 'Regular'
  currentGame.addplayers();
  loadStorage()
})
function loadStorage() {
  playerOneSection.insertAdjacentHTML("afterbegin", `
  <h3>${currentGame.players[0].token}</h3>
  `);
  playerTwoSection.insertAdjacentHTML("afterbegin", `
  <h3>${currentGame.players[1].token}</h3>
  `);
  currentGame.players[0].retrieveWinsFromStorage();
  currentGame.players[1].retrieveWinsFromStorage();
  if (isNaN(currentGame.players[0].wins)) {
    currentGame.players[0].wins = 0;
    currentGame.players[1].wins = 0;
  }
  playerOneWins.innerText = `Wins: ${currentGame.players[0].wins}`;
  playerTwoWins.innerText = `Wins: ${currentGame.players[1].wins}`;
}
