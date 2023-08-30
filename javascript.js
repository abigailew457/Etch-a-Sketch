const container = document.querySelector('#container');
console.log(container);

const rows = document.createElement('div');
rows.className = ('rows');
const columns = document.createElement('div');
columns.className = ('columns');

document.getElementById("container").appendChild(rows, columns);