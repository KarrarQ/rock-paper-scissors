class Game {
  constructor() {
    this.players = [];
    this.winner = "";
    this.gameType = "";
  }

  addPlayers() {
    var human = new Player({name: "Human", token: "👳🏻‍♂️"});
    this.players.push(human);
    var computer = new Player({name: "Computer", token: "🤖"});
    this.players.push(computer);
  }
