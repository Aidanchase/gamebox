class Game {
  
  constructor() {
    this.roomCode = this.generateCode();
    this.players = {};
    this.fakerIsFound = false;
    this.roundNumber = 0;

  }

  gameIsOver() {
    return (this.fakerIsFound || this.roundNumber > 2)
  }

  get winner() {
    return (this.fakerIsFound ? "not the faker" : "faker")
  }

  generateCode() {
    // vote for player
    return Math.random().toString(36).replace('0.', '').substring(0,4);
  }

  addPlayer(player){
    if(!this.players[player.name]){
      this.players[player.name] = player;
    }
    else {
      console.log("A player with that name already exists!")
    };
  }


  // May not be needed, keeping it in our back pocket
  resetFaker() {
    for (let i in this.players){
      this.players[i].isFaker = false;
    }
  }

  setFaker() {
    const keys = Object.keys(this.players);
    const index = Math.floor((Math.random() * keys.length));
    const faker = this.players[ keys[ index ] ]
    faker.isFaker = true;
  }

  endGame() {

  }

}

module.exports = Game;