/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
import Animal from './Animal';

logTitle('Template Literials')
/* coding examples */

const name = "Anna";
const country = "Nigeria";
const age = 24;

log("Name: " + name + " Country: " + country + " age: " + age);
log(`Name: ${name} Country: ${country} Age: ${age} `);
