/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
import Animal from './Animal';

logTitle('Spread Operators Arrays')
/* coding examples */

const arrayOne = ["Marian", "Anna", "Alex"];
const arrayTwo = ["Said", "Ismail", "Aisha"];

const concatArray = [...arrayOne, ...arrayTwo];

concatArray.forEach(function(name) {
	log(name);
});

const name = "DRILL";
const nameToArray = [...name];

nameToArray.forEach(function(letter){
	log(letter);
});

const addNumbers = function(n, n1, n2){
	return n + n1 + n2;
}

const numbers = [13,23,44];

const sum = addNumbers(...numbers);
log(sum);