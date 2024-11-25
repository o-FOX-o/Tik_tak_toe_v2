
//Lets you visualize complaix matrix.

const visualizeComplaixMatrix = (matrix) => {
    console.log(JSON.stringify(matrix, null, 2)); // Pretty-prints the array
};

//display matrix broad like (2D)

function display2DMatrix(matrix) {
    if (!Array.isArray(matrix) || !matrix.every(Array.isArray)) {
      console.log("Invalid matrix.");
      return;
    }
  
    matrix.forEach((row) => {
      console.log(row.join(" "));
    });
  }
 
export default {
    visualizeComplaixMatrix,
    display2DMatrix
  }

  