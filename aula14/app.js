// Externa
let readLineSync = require('readline-sync');
console.log(readLineSync);

// Wait for user's response.
let userName = readLineSync.question('Qual o seu nome? ');
console.log('Olá ' + userName + '!');

// Handle the secret text (e.g. password)
let favFood = readLineSync.question('Qual a sua comida favorita? ',)
console.log('Oh, ' + userName + ' ama ' + favFood + '!');