'use strict'

function letters(cadena) {
	return cadena.length;
}

function words(cadena) {
	let array = cadena.split(' ');
	return array.length;
}

function upperString(cadena) {
	return cadena.toLocaleUpperCase();
}

function titleString(cadena) {
	let array = cadena.split(' ');
	for (let i = 0; i < array.length; i++) {
		// Array[i].charAt(0) coge el primer caracter y lo convierte en mayusculas, luego con el slice(1), quitando el
		// primner caracter coge los demas y los convierte en minusculas
		array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1).toLowerCase();
	}
	return array.join(' ');
}

function backwardsLetters(cadena) {
	return cadena.split('').reverse().join('');
}

function backwardsWords(cadena) {
	return cadena.split(' ').reverse().join(' ');
}

function palindrome(cadena) {
	const cadenaLimpia = cadena.replace(/[^a-zA-Z]/g, '').toLocaleLowerCase();
	const cadenaInvertida = cadenaLimpia.split('').reverse().join('');
	return cadenaInvertida === cadenaLimpia;
}


export {
	letters,
	words,
	upperString,
	titleString,
	backwardsLetters,
	backwardsWords,
	palindrome
}
