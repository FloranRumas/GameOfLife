let grid = null;
const renderGrid = grid => {
  let $grid = document.querySelector("#grid");
  $grid.innerHTML = "";
  grid.forEach((line, i) => {
    let $line = document.createElement("div");
    //$line.classList.add("grid__row");
    line.forEach((cell, j) => {
      let $cell = document.createElement("span");
      //$cell.classList.add("grid__cell");
      $cell.addEventListener("click", () => {
        grid[i][j] = !grid[i][j];
        renderGrid(grid);
      });
      $cell.innerHTML = cell ? "👨🏾" : "💀";
      //$cell.classList.add(`grid__cell--${cell ? "alive" : "dead"}`);
      $line.appendChild($cell);
    });
    $grid.appendChild($line);
  });
};

document.querySelector("#generate").addEventListener("click", e => {
  var nb = document.getElementById("gridSize").value;
  grid = generateInitialGridFalse(nb);
  renderGrid(grid);
});

document.querySelector("#nextStep").addEventListener("click", e => {
  grid = step(grid);
  renderGrid(grid);
});

document.querySelector("#nbrCycleDefined").addEventListener("click", e => {
  var nb = document.getElementById("nbrCycleLife").value;
  const myInterval = setInterval(() => {
    grid = step(grid);
    renderGrid(grid);
    nb--;
    if (nb == 0) {
      clearInterval(myInterval);
    }
  }, 20);
});
