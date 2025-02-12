const generateInitialGrid = size =>
  Array.from({ length: size }, () =>
    Array.from({ length: size }, () => Math.floor(Math.random() * 10 + 1) >= 8)
  );

const generateInitialGridFalse = size =>
  Array.from({ length: size }, () => Array.from({ length: size }, () => false));

const renderALine = arr =>
  arr.reduce((acc, curr) => {
    acc += curr ? "X" : ".";
    return acc;
  }, "");

const render = arr => arr.map(renderALine).join("\n");

const isOutOfBound = ({ length }, { x, y }) =>
  x < 0 || y < 0 || x >= length || y >= length;

const getNextState = (isAlive, numberOfAliveNeighbours) =>
  isAlive
    ? numberOfAliveNeighbours === 2 || numberOfAliveNeighbours === 3
    : numberOfAliveNeighbours === 3;

const countAliveNeighbour = (grid, { x, y }) =>
  [
    [x - 1, y - 1],
    [x - 1, y],
    [x - 1, y + 1],
    [x, y - 1],
    [x, y + 1],
    [x + 1, y - 1],
    [x + 1, y],
    [x + 1, y + 1]
  ].filter(([i, j]) => !isOutOfBound(grid, { x: i, y: j }) && grid[i][j])
    .length;

const step = grid => {
  let newGrid = JSON.parse(JSON.stringify(grid));
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      newGrid[i][j] = getNextState(
        grid[i][j],
        countAliveNeighbour(grid, { x: i, y: j })
      );
    }
  }
  return newGrid;
};

/*module.exports = {
  render,
  generateInitialGrid,
  countAliveNeighbour,
  getNextState,
  step
};

let grid = generateInitialGrid(40);
let clignotant = generateInitialGridFalse(5);
clignotant[2][1] = true;
clignotant[2][2] = true;
clignotant[2][3] = true;
let planeur = generateInitialGridFalse(25);
planeur[1][3] = true;
planeur[2][3] = true;
planeur[2][1] = true;
planeur[3][3] = true;
planeur[3][2] = true;
const nbOfRenders = 100000;
(function myLoop(i, grid) {
  setTimeout(function() {
    console.clear();
    console.log(`Step : ${nbOfRenders - i}`);
    console.log(grid.map(renderALine).join("\n"));
    console.log("\n");
    grid = step(grid);
    if (--i) myLoop(i, grid); //  decrement i and call myLoop again if i > 0
  }, 40);
})(nbOfRenders, grid);*/
