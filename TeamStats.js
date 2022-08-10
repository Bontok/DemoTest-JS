const team  = {
    _players: [
            {firstName: 'Federico', lastName: 'Lopez', age: 40},
            {firstName: 'Gabriel', lastName: 'Vazquez', age: 38},
            {firstName: 'Marta', lastName: 'Albarracin', age: 37}
  ],
    _games: [
            {opponent: 'Racing', teamPoints: 50, opponentPoints: 27 }, 
            {opponent: 'River', teamPoints: 42, opponentPoints: 30 },
            {opponent: 'Boca', teamPoints: 30, opponentPoints: 5 }
    ],
    get players(){
      return this._players;
    },
    get games(){
      return this._games;
    },
    addplayer(newFirstName, newLastName, NewAge){
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: NewAge
  
      };
      this.players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints){
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
  };
      this.games.push(game)
    }
  };
  
  team.addplayer('Pepe', 'Rolo', 50);
  console.log(team.players); 
  
  team.addGame('Titans', 100, 98);
  console.log(team.games); 
  
  