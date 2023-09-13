const container = document.querySelector('#container');
console.log(container);


function makeRows(rows, cells) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cells', cells);

    for (i = 0; i < (rows * cells); i++) {
          let cell = document.createElement('div');
          cell.classList.add('cell');
          container.appendChild(cell);
          
          cell.addEventListener("mouseover", colorChange);
        function colorChange() {
        cell.style.backgroundColor = '#E8177C';
        };
    
}
};
makeRows(16, 16);



console.log(makeRows);
