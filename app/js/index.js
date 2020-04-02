/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
import Animal from './Animal';

logTitle('Spread Operators - Objects')
/* coding examples */

const address = {
	city: "LA",
	country: "USA",
	postCode: "LA44"
}

const name = {
	first : "Andy",
	last : "Jones"
}

const person = {...name, ...address};

log(JSON.stringify(person, null, 2));