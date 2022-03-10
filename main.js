const container = document.getElementById("container");

function makeRows(rows, cols) {
  
  container.style.gridTemplateColumns=`repeat(${cols},1fr)`;
  container.style.gridTemplateRows=`repeat(${cols},1fr)`;
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    cell.style.width='50px';
    cell.style.height='50px';
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(5, 5);