import examples from './examples.js' ;
import visuals from './visuals.js';
import functions from './functions.js';







function checkWin(game){
    const {board} = game;
    const checking = [functions.checkDiagolansDown,functions.checkDiagolansUp,functions.checkHorizontal,functions.checkVirtical];
    const result = [];
    game.players.find((player)=>{
        const cellTakenByplayer = functions.coordinatesOfValueInBoard(board,player.value);
        
        checking.forEach((checkFunction)=>{
            const checkResult = checkFunction(cellTakenByplayer,player,game);
            checkResult[0]? result.push(checkResult) : null;
        })
    })
    
    return result
}
checkWin(examples.games.game_1)


 
                                 


















