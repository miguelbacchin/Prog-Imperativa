const fs = require('fs');
const { dirname } = require('path/posix');

let dados = fs.readFileSync(__dirname + '/dados.txt', 'utf-8');

console.log(dados)