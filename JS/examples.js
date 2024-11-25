const boardOf1 = [
    [ 0, 1, 1, 0, 0, 0 ],
    [ 0, 0, 0, 1, 0, 0 ],
    [ 0, 0, 1, 1, 1, 0 ],
    [ 0, 1, 1, 1, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0 ]
  ];
  
  const board12x12 = [
    [0, 1, 1, 0, 0, 0, 0, 0, 2, 2, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 3, 3, 2, 0, 0],
    [0, 0, 1, 1, 1, 0, 4, 3, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 0, 4, 3, 3, 0, 0, 0],
    [0, 0, 0, 0, 0, 4, 4, 3, 0, 0, 0, 0],
    [0, 0, 2, 2, 0, 0, 4, 0, 0, 0, 0, 0],
    [0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [3, 3, 2, 0, 0, 0, 0, 1, 1, 1, 0, 0],
    [3, 3, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 4, 4],
    [0, 0, 0, 0, 1, 0, 0, 4, 4, 4, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0],
  ];

  const player_1 = {
    id:1,
    turn:false,
    icon: `url`,
    value: 1
  };

  const player_0 = {
    id:0,
    turn:false,
    icon: `url`,
    value: 0
  };

  const player_2 = {
    id:2,
    turn:false,
    icon: `url`,
    value: 2
  };

  const player_3 = {
    id:3,
    turn:false,
    icon: `url`,
    value: 3
  };

  


  const games = {
    game_1 : {
    players: [player_0,player_1,],
    winLinelength: 3,
    gameSize: {
        width:6,
        hight:5
    },
    board:boardOf1
    },
    game_2 : {
        players: [player_0,player_1,player_2,player_3],
        winLinelength: 4,
        gameSize: {
            width:5,
            hight:5
        },
        board:board12x12
        }
  }
  
  export default  {

    games
    
} 