//This function allows you to create multi dimensional, the first parameter must be an array of numbers. Example:[2,3,4], any value fot the second one
function createMatrix(dimensions , fillValue) {

    let matrix = null;

    dimensions.reverse().forEach((dimension) => {
        const line = [];
        for (let i = 0; i < dimension; i++) {
            let value ;
            if(!matrix){
                value = fillValue ;
            }else {
                value = matrix;
            }
            line.push(value);
        }
        matrix = line;
    });
    
    return matrix
}

  //return the coordinations found in array
  function coordinatesOfValueInArray(value,line,y){

    const takenCellsInLine = [];
    
    line.forEach((cell,x) => {
        
        if(cell === value){

            takenCellsInLine.push({
                y : y,
                x : x
            })

        }
            
    });               
                                                                                                             
    return takenCellsInLine
}

//return an array of coordinations
function coordinatesOfValueInBoard(board,value){
    const takenCells = [];
    board.forEach((line,y)=>{
        takenCells.push(coordinatesOfValueInArray(value,line,y));
    }) 

    return  takenCells.reduce((acc, currentArray) => acc.concat(currentArray), [])
}

//parameter: array of coordinates exp:
//[{x:1,y:4},{x:3,y:1}]
//Output: object exp{
//id:player.id,
//cordinate:[{x:0,y:2},{x:0,y:3},{x:0,y:4}],
//length: 3
//} or false
function checkHorizontal(coordinatesList,player,game){
      
    coordinatesList.sort((a,b)=>{
        return a.y - b.y
    })

    const condition = game.winLinelength;

    
    let line = {
        length: 1,
        coordinates: [],
        id: player.id
    }
    
    const repitions = [];

    coordinatesList.reduce((previous,current,index)=>{
        const currentX = current.x;
        const previousX = previous.x;
        const currentY = current.y;
        const previousY = previous.y;
        
        if(currentY === previousY && currentX === previousX + 1){
            line.length++
            line.coordinates.length === 0? line.coordinates.push(previous,current):line.coordinates.push(current);
            
            
            if(line.length === condition ){
                repitions.push(line);
                line = {
                    length: 1,
                    coordinates: [],
                    id: player.id
                };
               
            }
            return current 
        }else {

            line.length === condition?repitions.push(line):null;
                
                
            line = {
                    length: 1,
                    coordinates: [],
                    id: player.id
                };
            return current
        }
    },{x:null,y:null})


    repitions.forEach(element => {
        console.log(element)
    });


     return repitions
}



function checkVirtical(coordinatesList,player,game){
    // console.log('checking function: 2')
    return false
}

function checkDiagolansUp(coordinatesList,player,game){
    // console.log('checking function: 3')
    return false
}

function checkDiagolansDown(coordinatesList,player,game){
    // console.log('checking function: 4')
    return false
}

export default {
    createMatrix,
    coordinatesOfValueInBoard,
    coordinatesOfValueInArray,
    checkDiagolansDown,
    checkDiagolansUp,
    checkHorizontal,
    checkVirtical
}