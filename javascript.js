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
            cell.style.backgroundColor = randomColor;
        };
    
}
};
makeRows(16, 16);

var randomColor = Math.floor(Math.random()*16777215).toString(16);

const textCont = document.querySelector('#txtContainer');
console.log(textCont);

const btn = document.createElement('button');
btn.classList.add('btn')
btn.textContent = 'Click Me!';
textCont.appendChild(btn);