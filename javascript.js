const container = document.querySelector('#container');
console.log(container);

const rows = document.createElement('div');
rows.className = ('rows');
console.log(rows);

container.appendChild(rows);

const columns = document.createElement('div');
columns.className = ('columns');
console.log(columns);

container.appendChild(columns);