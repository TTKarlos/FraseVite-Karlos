import {
    letters,
    words,
    upperString,
    titleString,
    backwardsLetters,
    backwardsWords,
    palindrome
} from './src/functions.js'

document.querySelector('#app').innerHTML = `
<p> Abre la consola para ver los resultados </p>

let cadena = 'La ruta nos aporto otro paso natural';
let letras = letters(cadena);
let palabras = words(cadena);
console.log(letras + ' letras y ' + palabras + ' palabras');
let mayuscula = upperString(cadena);
console.log(mayuscula);
let primeraMayus = titleString(cadena);
console.log(primeraMayus);
let cadenaDelReves = backwardsLetters(cadena);
console.log(cadenaDelReves);
let palabrasDelReves = backwardsWords(cadena);
console.log(palabrasDelReves);
let palindromo = palindrome(cadena);
if (palindromo){
    console.log('Si es un palindromo');
}else {
    console.log('No es un palindromo')
}



`


